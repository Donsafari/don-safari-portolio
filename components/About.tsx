import Image from "next/image";

const stats = [
  { value: "6+", label: "Years of experience" },
  { value: "100+", label: "Sessions completed" },
  { value: "8", label: "Countries shot in" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-stone-900/40 border-y border-stone-800/50"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Photo placeholder */}
        <div className="relative">
          <div className="aspect-[3/4] bg-stone-800 overflow-hidden">
            <Image
              src="/pp1.jpg"
              alt="Photographer at work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          {/* Accent frame */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-amber-200/20 pointer-events-none" />
        </div>

        {/* Text */}
        <div>
          <p className="text-amber-400/70 tracking-[0.3em] uppercase text-xs mb-4">
            About
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-100 leading-tight mb-6">
            Framed with
            <br />
            <em>Cinema</em>
          </h2>
          <div className="space-y-4 text-stone-400 leading-relaxed font-light">
            <p>
              With many years in the game, I&apos;ve been trusted to shoot
              major TV personalities, upcoming models, and influencers —
              documenting life altering events in their lives. My cinematic
              style stands out against your average photo, playing with both
              angles and lighting. I flip the perspective of your standard
              photo shoot.
            </p>
            <p>
              The camera is just a tool — distinctively capturing your intimate
              moments, focusing on the finer details portrayed.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-stone-800 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl text-amber-200">{s.value}</p>
                <p className="text-xs text-stone-500 mt-1 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
