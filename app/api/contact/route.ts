import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Donsafari Website <presets@donsafari.com>",
      to: "donsafarihq@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; background: #0c0a09; color: #f5f0eb; padding: 40px 32px;">
          <h1 style="font-size: 24px; color: #e5c97e; margin-bottom: 8px;">New Contact Message</h1>
          <p style="color: #a8a29e; font-size: 14px; margin-bottom: 24px;">Someone reached out via donsafari.com</p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="color: #78716c; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; padding: 8px 0; border-bottom: 1px solid #292524; width: 80px;">Name</td>
              <td style="color: #f5f0eb; font-size: 14px; padding: 8px 0; border-bottom: 1px solid #292524;">${name}</td>
            </tr>
            <tr>
              <td style="color: #78716c; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; padding: 8px 0; border-bottom: 1px solid #292524;">Email</td>
              <td style="color: #f5f0eb; font-size: 14px; padding: 8px 0; border-bottom: 1px solid #292524;">${email}</td>
            </tr>
          </table>
          <p style="color: #78716c; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</p>
          <p style="color: #f5f0eb; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          <p style="color: #57534e; font-size: 12px; margin-top: 32px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
