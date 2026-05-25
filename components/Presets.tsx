const presets = [
  {
    name: "Golden Hour",
    description:
      "Warm tones and lifted shadows inspired by late afternoon portraits.",
    price: "$18",
    tag: "Most popular",
    before: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
  },
  {
    name: "Muted Film",
    description: "Desaturated, grain-forward look that evokes classic 35mm.",
    price: "$18",
    tag: null,
    before: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
  },
  {
    name: "Cool Tones",
    description: "Crisp shadows with a slight blue shift — clean and modern.",
    price: "$18",
    tag: null,
    before: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
  },
  {
    name: "Full Bundle",
    description:
      "All three preset packs plus future updates. Best value for active editors.",
    price: "$45",
    tag: "Best value",
    before: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80",
  },
];

export default function Presets() {
  return (
    <section id="presets" className="py-28 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-6">
        <p className="text-amber-400/70 tracking-[0.3em] uppercase text-xs mb-3">
          Shop
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-4">
          Lightroom Presets
        </h2>
        <p className="text-stone-400 font-light max-w-md mx-auto">
          Bring my signature edit to your own work. One-click presets built for
          portrait and lifestyle photography.
        </p>
      </div>

      {/* Coming soon banner */}
      <div className="mb-12 text-center">
        <span className="inline-block px-5 py-2 bg-amber-200/10 border border-amber-200/30 text-amber-200 text-xs tracking-widest uppercase">
          Shop opening soon — join the waitlist below
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {presets.map((preset) => (
          <div
            key={preset.name}
            className="group bg-stone-900/60 border border-stone-800 hover:border-amber-200/40 transition-colors duration-300 flex flex-col"
          >
            {/* Preview image */}
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={preset.before}
                alt={`${preset.name} preset preview`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {preset.tag && (
                <span className="absolute top-3 left-3 bg-amber-200 text-stone-950 text-[10px] font-medium tracking-widest uppercase px-2 py-1">
                  {preset.tag}
                </span>
              )}
            </div>

            {/* Info */}
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
                  disabled
                  className="text-xs tracking-widest uppercase px-4 py-2 border border-stone-700 text-stone-500 cursor-not-allowed"
                >
                  Coming soon
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
