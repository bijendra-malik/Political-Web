import { action } from "./_generated/server";
import { v } from "convex/values";

/**
 * Send a contact form email from the portfolio landing page.
 * Runs as a Convex Action so the API key stays server-side.
 */
export const sendContactEmail = action({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (_ctx, args) => {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromName = args.name || "Portfolio Visitor";
    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <div style="background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%); border-radius: 12px 12px 0 0; padding: 32px 24px; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 24px; font-weight: 700;">New Message from Portfolio</h1>
        </div>
        <div style="background: #1a1a1a; border-radius: 0 0 12px 12px; padding: 32px 24px; border: 1px solid #333; border-top: none;">
          <div style="margin-bottom: 20px;">
            <p style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 4px;">From</p>
            <p style="color: #fff; font-size: 16px; margin: 0;">${fromName} &lt;${args.email}&gt;</p>
          </div>
          <div style="margin-bottom: 20px;">
            <p style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 4px;">Subject</p>
            <p style="color: #fff; font-size: 16px; margin: 0;">${args.subject}</p>
          </div>
          <div style="border-top: 1px solid #333; padding-top: 20px;">
            <p style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Message</p>
            <p style="color: #ddd; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${args.message}</p>
          </div>
          <div style="border-top: 1px solid #333; margin-top: 24px; padding-top: 16px; text-align: center;">
            <p style="color: #666; font-size: 12px; margin: 0;">Sent from KM Prabha's Portfolio</p>
          </div>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: ["hello@kmprabha.dev"],
      replyTo: args.email,
      subject: `[Portfolio] ${args.subject}`,
      html,
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return data;
  },
});
