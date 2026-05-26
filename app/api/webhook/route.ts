import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  const body = await req.text();
  const signature = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email;

    if (customerEmail) {
      await resend.emails.send({
        from: "Donsafari <presets@donsafari.com>",
        to: customerEmail,
        subject: "Your Donsafari Preset Pack is here!",
        html: `
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; background: #0c0a09; color: #f5f0eb; padding: 40px 32px;">
            <h1 style="font-size: 28px; color: #e5c97e; margin-bottom: 8px;">Thank you for your purchase!</h1>
            <p style="color: #a8a29e; font-size: 15px; margin-bottom: 24px;">Your Preset Pack 1 is ready to download.</p>
            <a href="https://drive.google.com/uc?export=download&id=1cOrdfY5PFFlUvXacYbq1Y1MyK_lrrNcj"
               style="display: inline-block; background: #e5c97e; color: #0c0a09; padding: 14px 28px; text-decoration: none; font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase; font-family: sans-serif; margin-bottom: 32px;">
              Download Preset
            </a>
            <p style="color: #78716c; font-size: 13px; line-height: 1.6;">
              Once downloaded, unzip the file and drop the .xmp file into your Lightroom presets folder.<br/><br/>
              Any questions? Reply to this email and I'll help you out.
            </p>
            <p style="color: #57534e; font-size: 12px; margin-top: 32px;">— Donsafari</p>
          </div>
        `,
      });
    }
  }

  return NextResponse.json({ received: true });
}
