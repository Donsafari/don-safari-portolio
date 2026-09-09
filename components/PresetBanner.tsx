"use client";

import { useState, useEffect } from "react";

export default function PresetBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-stone-950 border-t border-amber-200/20 px-5 py-4 flex items-center justify-between gap-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 animate-pulse" />
          <p className="text-stone-300 text-sm font-light truncate">
            <span className="text-amber-200 font-medium">Day & Night Bundles</span>
            {" "}— cinematic Lightroom presets from £4.99
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="#presets"
            onClick={() => setDismissed(true)}
            className="text-xs tracking-widest uppercase px-4 py-2 bg-amber-200 text-stone-950 hover:bg-amber-100 transition-colors duration-200 font-medium"
          >
            Shop Now
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-stone-600 hover:text-stone-400 transition-colors duration-200 text-lg leading-none"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
