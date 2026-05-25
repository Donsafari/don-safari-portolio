export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-200/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-stone-700/20 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-100 leading-tight mb-6">
          Donsafari
        </h1>

        <p className="text-stone-400 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed mb-12">
          Quietly Cinematic.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="inline-block px-8 py-3.5 bg-amber-200 text-stone-950 text-sm font-medium tracking-widest uppercase hover:bg-amber-100 transition-colors duration-200"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 border border-stone-600 text-stone-300 text-sm font-medium tracking-widest uppercase hover:border-amber-200 hover:text-[#c2603a] transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-stone-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
