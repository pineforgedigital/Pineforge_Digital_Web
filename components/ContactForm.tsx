"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "next/navigation";
import { submitContact } from "@/app/actions/contact";
import { CONTACT_SERVICES, matchServiceFromParam } from "@/lib/contact";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const closeModalBtnRef = useRef<HTMLButtonElement>(null);
  const formLoadedAtRef = useRef<number>(0);
  const paramService = matchServiceFromParam(searchParams.get("service"));
  const [prevParamService, setPrevParamService] = useState(paramService);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: paramService,
    message: "",
    website_url: "",
  });

  if (paramService !== prevParamService) {
    setPrevParamService(paramService);
    if (paramService) {
      setFormData((prev) => ({ ...prev, service: paramService }));
    }
  }

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string>("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Record mount timestamp after hydration for automated speed-trap verification
  useEffect(() => {
    formLoadedAtRef.current = Date.now();
  }, []);

  // Modal focus management, body scroll lock, and Escape key handling
  useEffect(() => {
    if (!isSuccessModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeModalBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSuccessModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSuccessModalOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("");

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedCompany = formData.company.trim();
    const trimmedMessage = formData.message.trim();

    const newErrors: Record<string, string> = {};
    if (!trimmedName) {
      newErrors.name = "Please enter your name.";
    } else if (trimmedName.length < 2 || trimmedName.length > 100) {
      newErrors.name = "Name must be between 2 and 100 characters.";
    }

    if (!trimmedEmail) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !EMAIL_REGEX.test(trimmedEmail) ||
      trimmedEmail.length > 255
    ) {
      newErrors.email = "Please enter a valid email (e.g., name@company.com).";
    }

    if (trimmedCompany.length > 100) {
      newErrors.company = "Company name must be 100 characters or fewer.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!trimmedMessage) {
      newErrors.message = "Please tell us a bit about your project.";
    } else if (trimmedMessage.length < 10) {
      newErrors.message =
        "Please provide at least 10 characters describing your project.";
    } else if (trimmedMessage.length > 2000) {
      newErrors.message = "Message must be 2,000 characters or fewer.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", trimmedName);
      data.append("email", trimmedEmail);
      data.append("company", trimmedCompany);
      data.append("service", formData.service);
      data.append("message", trimmedMessage);
      data.append("website_url", formData.website_url);
      data.append("formLoadedAt", String(formLoadedAtRef.current));

      const result = await submitContact(data);

      if (result.success) {
        setIsSuccessModalOpen(true);
        setFormStatus("");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
          website_url: "",
        });
        setErrors({});
        formLoadedAtRef.current = Date.now();
      } else {
        setFormStatus(result.error || "Failed to send message.");
      }
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      setFormStatus(
        "An error occurred. Please try again or email admin@pineforge.digital."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        ref={formRef}
        id="contactForm"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={100}
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "nameError" : undefined}
          />
          {errors.name && (
            <span className="error-message" id="nameError">
              {errors.name}
            </span>
          )}
        </div>

        {/* Honeypot Field (Hidden from humans) */}
        <div style={{ display: "none" }} aria-hidden="true">
          <label htmlFor="website_url">Website URL</label>
          <input
            type="text"
            id="website_url"
            name="website_url"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website_url}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={255}
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "emailError" : undefined}
          />
          {errors.email && (
            <span className="error-message" id="emailError">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="company">Company (Optional)</label>
          <input
            type="text"
            id="company"
            name="company"
            maxLength={100}
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
            className={errors.company ? "input-error" : ""}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "companyError" : undefined}
          />
          {errors.company && (
            <span className="error-message" id="companyError">
              {errors.company}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="service">Service Needed</label>
          <select
            id="service"
            name="service"
            required
            aria-label="Service Needed"
            value={formData.service}
            onChange={handleChange}
            className={errors.service ? "input-error" : ""}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "serviceError" : undefined}
          >
            <option value="" disabled>
              Select a service...
            </option>
            {CONTACT_SERVICES.map((option) => (
              <option key={option.slug} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <span className="error-message" id="serviceError">
              {errors.service}
            </span>
          )}
        </div>

        <div className="form-group">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <label htmlFor="message">Message</label>
            <span
              style={{
                fontSize: "0.8rem",
                color: "var(--text-tertiary)",
              }}
            >
              {formData.message.length}/2000
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            maxLength={2000}
            placeholder="Tell us about your project, goals, and timeline..."
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "messageError" : undefined}
          ></textarea>
          {errors.message && (
            <span className="error-message" id="messageError">
              {errors.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          id="submitBtn"
          className="btn btn-primary"
          style={{ width: "100%" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        <p
          style={{
            marginTop: "0.85rem",
            textAlign: "center",
            fontSize: "0.875rem",
            color: "var(--text-tertiary)",
          }}
        >
          No obligation—we review every inquiry and reply within one business
          day.
        </p>

        {formStatus && (
          <p
            id="formStatus"
            role="alert"
            style={{
              marginTop: "1rem",
              textAlign: "center",
              color: "#dc2626",
              fontWeight: 500,
            }}
          >
            {formStatus}
          </p>
        )}
      </form>

      {/* Full-Viewport Success Modal via Portal */}
      {isSuccessModalOpen &&
        createPortal(
          <div
            className="modal-overlay active"
            id="successModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="successModalTitle"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsSuccessModalOpen(false);
              }
            }}
          >
            <div className="modal-content">
              <div className="modal-icon-circle" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </div>
              <h2 id="successModalTitle">Message Sent</h2>
              <p>
                Thank you for reaching out to Pineforge Digital LLC. Our team
                will review your project details and follow up within one
                business day.
              </p>
              <button
                ref={closeModalBtnRef}
                type="button"
                id="closeModalBtn"
                className="btn modal-close-btn"
                style={{ width: "100%" }}
                onClick={() => setIsSuccessModalOpen(false)}
              >
                Done
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
