import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const subjectLabels: Record<string, string> = {
      technical: "Technical Issue",
      account: "Account & Billing",
      gameplay: "Gameplay Question",
      feedback: "Feedback & Suggestions",
      other: "Other",
    };

    await transporter.sendMail({
      from: `"2248 Linko Support" <${process.env.GMAIL_USER}>`,
      to: process.env.SUPPORT_EMAIL,
      replyTo: email,
      subject: `[Support] ${subjectLabels[subject] ?? subject} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1C1917;">
          <div style="background: linear-gradient(135deg, #F59E0B, #D97706); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; color: #fff; font-size: 20px; font-weight: 800;">
              2248 Linko — Support Request
            </h1>
          </div>
          <div style="background: #FFFBEB; border: 1px solid #FDE68A; border-top: none; border-radius: 0 0 12px 12px; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px 0; color: #92400E; font-weight: 600; width: 100px;">From</td>
                <td style="padding: 8px 0; color: #1C1917;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #92400E; font-weight: 600;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #D97706;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #92400E; font-weight: 600;">Subject</td>
                <td style="padding: 8px 0; color: #1C1917;">${subjectLabels[subject] ?? subject}</td>
              </tr>
            </table>
            <div style="background: #fff; border: 1px solid #FDE68A; border-radius: 8px; padding: 20px;">
              <p style="margin: 0 0 8px; color: #92400E; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="margin: 0; color: #1C1917; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin: 24px 0 0; color: #B45309; font-size: 13px;">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
