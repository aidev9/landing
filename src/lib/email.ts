import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadConfirmationEmail(email: string, name: string) {
  try {
    await resend.emails.send({
      from: "Cursor Landing Page <noreply@yourdomain.com>",
      to: email,
      subject: "Thank you for your interest!",
      html: `
        <h1>Thank you for your interest, ${name}!</h1>
        <p>We've received your inquiry and will get back to you shortly.</p>
      `,
    });
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
    throw error;
  }
}

export async function sendAdminNotificationEmail(leadData: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
}) {
  try {
    await resend.emails.send({
      from: "Cursor Landing Page <noreply@yourdomain.com>",
      to: process.env.ADMIN_EMAIL!,
      subject: "New Lead Received",
      html: `
        <h1>New Lead Received</h1>
        <p><strong>Name:</strong> ${leadData.name}</p>
        <p><strong>Email:</strong> ${leadData.email}</p>
        ${
          leadData.company
            ? `<p><strong>Company:</strong> ${leadData.company}</p>`
            : ""
        }
        ${
          leadData.phone
            ? `<p><strong>Phone:</strong> ${leadData.phone}</p>`
            : ""
        }
        ${
          leadData.message
            ? `<p><strong>Message:</strong> ${leadData.message}</p>`
            : ""
        }
      `,
    });
  } catch (error) {
    console.error("Failed to send admin notification:", error);
    throw error;
  }
}
