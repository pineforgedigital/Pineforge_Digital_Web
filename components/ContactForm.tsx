"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { submitContact } from "@/app/actions/contact";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    website_url: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string>("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Pre-select service from URL query param if present
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (!serviceParam) return;

    const query = serviceParam.toLowerCase();
    const serviceOptions = [
      "Custom Website Design & Development",
      "Search Engine Optimization (SEO)",
      "E-Commerce & Payment Integration",
      "Custom Web Applications",
      "Website Maintenance & Hosting",
      "Other / Consultation",
    ];

    const matched = serviceOptions.find((opt) =>
      opt.toLowerCase().includes(query)
    );
    if (matched) {
      setFormData((prev) => ({ ...prev, service: matched }));
    }
  }, [searchParams]);

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

    // Client-side validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email (e.g., name@company.com).";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us a bit about your project.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("company", formData.company);
      data.append("service", formData.service);
      data.append("message", formData.message);
      data.append("website_url", formData.website_url);

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
      } else {
        setFormStatus(result.error || "Failed to send message.");
      }
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      setFormStatus("An error occurred. Please try again later.");
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
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
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
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
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
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
          />
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
          >
            <option value="" disabled>
              Select a service...
            </option>
            <option value="Custom Website Design & Development">
              Custom Website Design &amp; Development
            </option>
            <option value="Search Engine Optimization (SEO)">
              Search Engine Optimization (SEO)
            </option>
            <option value="E-Commerce & Payment Integration">
              E-Commerce &amp; Payment Integration
            </option>
            <option value="Custom Web Applications">
              Custom Web Applications
            </option>
            <option value="Website Maintenance & Hosting">
              Website Maintenance &amp; Hosting
            </option>
            <option value="Other / Consultation">Other / Consultation</option>
          </select>
          {errors.service && (
            <span className="error-message" id="serviceError">
              {errors.service}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
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

        {formStatus && (
          <p
            id="formStatus"
            style={{
              marginTop: "1rem",
              textAlign: "center",
              color: "#ef4444",
            }}
          >
            {formStatus}
          </p>
        )}
      </form>

      {/* Success Modal */}
      <div
        className={`modal-overlay ${isSuccessModalOpen ? "active" : ""}`}
        id="successModal"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsSuccessModalOpen(false);
          }
        }}
      >
        <div className="modal-content">
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "rgba(14, 165, 233, 0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem auto",
              color: "#0ea5e9",
            }}
          >
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
          <h2
            className="mb-2"
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Message Sent
          </h2>
          <p
            className="mb-4"
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              lineHeight: 1.6,
            }}
          >
            Thank you for reaching out to Pineforge Digital. We will review your
            project details and get back to you within one business day.
          </p>
          <button
            id="closeModalBtn"
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={() => setIsSuccessModalOpen(false)}
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
}
