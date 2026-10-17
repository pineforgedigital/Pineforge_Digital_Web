"use server";

import { Resend } from "resend";

export interface ContactState {
  success?: boolean;
  error?: string;
}

export async function submitContact(formData: FormData): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const company = (formData.get("company") as string)?.trim() || "";
  const service = (formData.get("service") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();
  const websiteUrl = (formData.get("website_url") as string)?.trim(); // Honeypot

  // Spam Honeypot check: If filled, silently acknowledge
  if (websiteUrl) {
    return { success: true };
  }

  // Field validation
  if (!name || !email || !message || !service) {
    return { error: "Please fill in all required fields." };
  }

  if (name.length > 100) {
    return { error: "Name is too long." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 255) {
    return { error: "Please enter a valid email address." };
  }

  if (company.length > 100) {
    return { error: "Company name is too long." };
  }

  if (message.length > 2000) {
    return { error: "Message is too long." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not set. Skipping email dispatch.");
    return { success: true };
  }

  const resend = new Resend(apiKey);

  const escapeHtml = (unsafe: string) =>
    unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company);
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  try {
    // 1. Send Admin Notification to admin@pineforge.digital
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

    await resend.emails.send({
      from: "Pineforge Website <admin@pineforge.digital>",
      to: ["admin@pineforge.digital"],
      reply_to: email,
      subject: `New Inquiry: ${service} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nService: ${service}\n\nMessage:\n${message}`,
      html: adminHtml,
    });

    // 2. Send Customer Confirmation
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
              <p style="margin: 0 0 20px; font-size: 16px; color: #cbd5e1; line-height: 1.6;">Thanks for getting in touch with Pineforge Digital — I appreciate you reaching out.</p>
              <p style="margin: 0 0 20px; font-size: 16px; color: #cbd5e1; line-height: 1.6;">I’ve received your message and will take a look at the details you shared. If I need any clarification or next steps, I’ll follow up shortly. In the meantime, feel free to reply to this email if there’s anything additional you’d like me to know.</p>
              <p style="margin: 0 0 20px; font-size: 16px; color: #cbd5e1; line-height: 1.6;">Looking forward to learning more about your project.</p>
              <div style="margin-top: 40px; border-top: 1px solid #334155; padding-top: 20px;">
                <p style="margin: 0 0 5px; font-size: 16px; color: #f8fafc; font-weight: 600;">Best regards,</p>
                <p style="margin: 0 0 5px; font-size: 16px; color: #38bdf8; font-weight: 700;">Caleb Cannon</p>
                <p style="margin: 0 0 5px; font-size: 14px; color: #94a3b8;">Pineforge Digital LLC</p>
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
              <p style="margin: 0; font-size: 12px; color: #475569;">&copy; ${new Date().getFullYear()} Pineforge Digital LLC</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: "Pineforge Digital <admin@pineforge.digital>",
      to: [email],
      reply_to: "admin@pineforge.digital",
      subject: "Received: Your Inquiry to Pineforge Digital",
      text: `Hello ${name},\n\nWe have received your request. We will review your details and get back to you shortly.\n\nBest,\nPineforge Digital`,
      html: userHtml,
    });

    return { success: true };
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Resend Error:", error.message || error);
    return { error: "Failed to send message. Please try again or email us directly." };
  }
}
