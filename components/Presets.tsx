"use client";

import { useState } from "react";
import Image from "next/image";

const presets = [
  {
    name: "Preset Pack 1",
    description:
      "Bring your warm pictures to life. Silky cinematic shine to make your photos pop. Edit like a boss.",
    price: "£4",
    tag: "Available now",
    priceId: "price_1TeIde35QywjBrcAXQ4AYIOD",
    before: "/p4.jpg",
  },
  {
    name: "Donsafari Preset 2",
    description:
      "Feeling cyberpunk? Bring out the neons, darks and bright colours.",
    price: "£4",
    tag: "Available now",
    priceId: "price_1TeId735QywjBrcAS5PT8h3d",
    before: "/l2.jpg",
  },
  {
    name: "Donsafari Preset 3",
    description:
      "Classy with a little editorial grit. Make your photos fresh off film.",
    price: "£4",
    tag: "Available now",
    priceId: "price_1TeIa135QywjBrcAmnq5LoWp",
    before: "/p1.jpg",
  },
];

export default function Presets() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleBuy(priceId: string) {
    setLoading(priceId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(null);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(null);
    }
  }

  return (
    <section id="presets" className="py-28 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-amber-400/70 tracking-[0.3em] uppercase text-xs mb-3">
          Shop
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-4">
          Lightroom Presets
        </h2>
        <p className="text-stone-400 font-light max-w-md mx-auto">
          Bring my signature edit to your own work, one-click presets.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {presets.map((preset) => (
          <div
            key={preset.name}
            className="group bg-stone-900/60 border border-stone-800 hover:border-amber-200/40 transition-colors duration-300 flex flex-col"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <Image
                src={preset.before}
                alt={`${preset.name} preview`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-all duration-700"
              />
              {preset.tag && (
                <span className="absolute top-3 left-3 bg-amber-200 text-stone-950 text-[10px] font-medium tracking-widest uppercase px-2 py-1">
                  {preset.tag}
                </span>
              )}
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-serif text-lg text-stone-100 mb-1">
                {preset.name}
              </h3>
              <p className="text-stone-500 text-sm font-light leading-snug flex-1">
                {preset.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-serif text-xl text-amber-200">
                  {preset.price}
                </span>
                <button
                  onClick={() => handleBuy(preset.priceId)}
                  disabled={loading === preset.priceId}
                  className="text-xs tracking-widest uppercase px-4 py-2 bg-amber-200 text-stone-950 hover:bg-amber-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading === preset.priceId ? "Loading..." : "Buy Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
