import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const { priceId } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    success_url: `${req.headers.get("origin")}/success`,
    cancel_url: `${req.headers.get("origin")}/#presets`,
  });

  return NextResponse.json({ url: session.url });
}
