"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { CONTACT_SERVICES } from "@/lib/contact";

export interface ContactState {
  success?: boolean;
  error?: string;
}

const MAX_REQUESTS = 5;
const WINDOW_MS = 60 * 60 * 1000;
const MIN_SUBMIT_TIME_MS = 1500;
const rateLimitStore = new Map<string, number[]>();

const ALLOWED_SERVICES = new Set<string>(
  CONTACT_SERVICES.map((item) => item.label)
);

const CONTROL_CHARS_REGEX = /[\r\n\x00-\x1f\x7f]/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  if (rateLimitStore.size > 1000) {
    rateLimitStore.forEach((timestamps, key) => {
      const valid = timestamps.filter((t) => t > windowStart);
      if (valid.length === 0) {
        rateLimitStore.delete(key);
      } else {
        rateLimitStore.set(key, valid);
      }
    });
  }

  const existing = (rateLimitStore.get(ip) || []).filter(
    (t) => t > windowStart
  );
  if (existing.length >= MAX_REQUESTS) {
    rateLimitStore.set(ip, existing);
    return false;
  }

  existing.push(now);
  rateLimitStore.set(ip, existing);
  return true;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitContact(formData: FormData): Promise<ContactState> {
  const hdrs = await headers();
  const forwardedFor = hdrs.get("x-forwarded-for");
  const clientIp =
    forwardedFor?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip")?.trim() ||
    "unknown";

  if (!checkRateLimit(clientIp)) {
    return {
      error:
        "Too many submissions. Please wait a bit or email admin@pineforge.digital directly.",
    };
  }

  const websiteUrl = (formData.get("website_url") as string)?.trim() || "";
  const loadedAtRaw = formData.get("formLoadedAt") as string | null;
  const loadedAt = loadedAtRaw ? Number(loadedAtRaw) : NaN;

  // Silent honeypot and automated speed-submission trap
  if (
    websiteUrl.length > 0 ||
    (Number.isFinite(loadedAt) &&
      loadedAt > 0 &&
      Date.now() - loadedAt < MIN_SUBMIT_TIME_MS)
  ) {
    return { success: true };
  }

  const name = ((formData.get("name") as string) || "").trim();
  const email = ((formData.get("email") as string) || "").trim();
  const rawCompany = ((formData.get("company") as string) || "").trim();
  const company = rawCompany.replace(/[\r\n\x00-\x1f\x7f]/g, " ").trim();
  const service = ((formData.get("service") as string) || "").trim();
  const message = ((formData.get("message") as string) || "").trim();

  if (!name || !email || !service || !message) {
    return { error: "Please fill in all required fields." };
  }

  if (
    name.length < 2 ||
    name.length > 100 ||
    CONTROL_CHARS_REGEX.test(name)
  ) {
    return { error: "Please enter a valid name (2–100 characters)." };
  }

  if (
    !EMAIL_REGEX.test(email) ||
    email.length > 255 ||
    CONTROL_CHARS_REGEX.test(email)
  ) {
    return { error: "Please enter a valid email address." };
  }

  if (company.length > 100) {
    return { error: "Company name must be 100 characters or fewer." };
  }

  if (!ALLOWED_SERVICES.has(service)) {
    return { error: "Please select a valid service option." };
  }

  if (message.length < 10 || message.length > 2000) {
    return {
      error: "Please provide a message between 10 and 2,000 characters.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured. Contact submission failed.");
    return {
      error:
        "Our contact form is temporarily unavailable. Please email admin@pineforge.digital or call (262) 234-1027 directly.",
    };
  }

  const resend = new Resend(apiKey);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company);
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  try {
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: 'Inter', system-ui, -apple-system, sans-serif; background-color: #0B1120; color: #f8fafc; padding: 40px 20px; margin: 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15); border: 1px solid #1e293b;">
          <tr>
            <td style="background-color: #0f172a; padding: 30px; text-align: center; border-bottom: 1px solid #1e293b;">
              <img src="https://pineforge.digital/images/Brand_Logo_white.png" alt="Pineforge Digital" style="width: 140px; height: auto; display: block; margin: 0 auto 15px;">
              <p style="margin: 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Website Inquiry</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px; background-color: #0f172a;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td width="48%" valign="top" style="padding-bottom: 20px; border-bottom: 1px solid #334155;">
                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Name</p>
                    <p style="margin: 0; font-size: 16px; color: #f8fafc; font-weight: 500;">${safeName}</p>
                  </td>
                  <td width="4%" style="border-bottom: 1px solid #334155;">&nbsp;</td>
                  <td width="48%" valign="top" style="padding-bottom: 20px; border-bottom: 1px solid #334155;">
                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Email</p>
                    <p style="margin: 0; font-size: 16px; color: #f8fafc; font-weight: 500;">
                      <a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none;">${safeEmail}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width="48%" valign="top" style="padding-top: 20px; padding-bottom: 5px;">
                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Company</p>
                    <p style="margin: 0; font-size: 16px; color: #f8fafc; font-weight: 500;">${safeCompany || "N/A"}</p>
                  </td>
                  <td width="4%">&nbsp;</td>
                  <td width="48%" valign="top" style="padding-top: 20px; padding-bottom: 5px;">
                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Service Interest</p>
                    <div style="margin-top: 5px;">
                      <span style="display: inline-block; background-color: rgba(56, 189, 248, 0.1); color: #38bdf8; padding: 6px 14px; border-radius: 999px; font-size: 13px; font-weight: 600; border: 1px solid rgba(56, 189, 248, 0.2);">${safeService}</span>
                    </div>
                  </td>
                </tr>
              </table>
              <div style="margin-top: 35px;">
                <p style="margin: 0 0 12px; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Message</p>
                <div style="background-color: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 24px; color: #e2e8f0; font-size: 15px; line-height: 1.6;">
                  ${safeMessage}
                </div>
              </div>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const { error: adminError } = await resend.emails.send({
      from: "Pineforge Website <admin@pineforge.digital>",
      to: ["admin@pineforge.digital"],
      replyTo: email,
      subject: `New Inquiry: ${service} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nService: ${service}\n\nMessage:\n${message}`,
      html: adminHtml,
    });

    if (adminError) {
      console.error("Resend Admin Notification Error:", adminError);
      return {
        error:
          "Failed to send message. Please try again or email admin@pineforge.digital directly.",
      };
    }

    const userHtml = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: 'Inter', system-ui, -apple-system, sans-serif; background-color: #0B1120; color: #f8fafc; padding: 40px 20px; margin: 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15); border: 1px solid #1e293b;">
          <tr>
            <td style="background-color: #0f172a; padding: 30px; text-align: center; border-bottom: 1px solid #1e293b;">
              <img src="https://pineforge.digital/images/Brand_Logo_white.png" alt="Pineforge Digital" style="width: 140px; height: auto; display: block; margin: 0 auto 15px;">
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px; background-color: #0f172a;">
              <p style="margin: 0 0 20px; font-size: 16px; color: #f8fafc; line-height: 1.6;">Hello ${safeName},</p>
              <p style="margin: 0 0 20px; font-size: 16px; color: #cbd5e1; line-height: 1.6;">Thank you for contacting Pineforge Digital LLC regarding <strong style="color: #f8fafc;">${safeService}</strong>.</p>
              <p style="margin: 0 0 20px; font-size: 16px; color: #cbd5e1; line-height: 1.6;">Our team has received your inquiry and will review your project details and respond within one business day. If you have any additional requirements to share in the meantime, simply reply to this email.</p>
              <div style="margin-top: 40px; border-top: 1px solid #334155; padding-top: 20px;">
                <p style="margin: 0 0 5px; font-size: 16px; color: #f8fafc; font-weight: 600;">Best regards,</p>
                <p style="margin: 0 0 5px; font-size: 16px; color: #38bdf8; font-weight: 700;">Pineforge Digital LLC</p>
                <p style="margin: 0 0 5px; font-size: 14px; color: #94a3b8;">Bristol, Wisconsin</p>
                <p style="margin: 0 0 5px; font-size: 14px; color: #94a3b8;">
                  <a href="mailto:admin@pineforge.digital" style="color: #38bdf8; text-decoration: none;">admin@pineforge.digital</a>
                </p>
                <p style="margin: 5px 0 0; font-size: 14px; color: #94a3b8;">
                  <a href="https://pineforge.digital" style="color: #38bdf8; text-decoration: none;">https://pineforge.digital</a>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #0b1120; padding: 24px; text-align: center; border-top: 1px solid #1e293b;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">&copy; ${new Date().getFullYear()} Pineforge Digital LLC</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const { error: userError } = await resend.emails.send({
      from: "Pineforge Digital <admin@pineforge.digital>",
      to: [email],
      replyTo: "admin@pineforge.digital",
      subject: "Received: Your Inquiry to Pineforge Digital",
      text: `Hello ${name},\n\nThank you for contacting Pineforge Digital LLC regarding ${service}.\n\nOur team has received your inquiry and will review your details and follow up within one business day.\n\nBest regards,\nPineforge Digital LLC\nhttps://pineforge.digital`,
      html: userHtml,
    });

    if (userError) {
      console.error("Resend Customer Confirmation Error:", userError);
    }

    return { success: true };
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Resend Error:", error.message || error);
    return {
      error:
        "Failed to send message. Please try again or email admin@pineforge.digital directly.",
    };
  }
}
