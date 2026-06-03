"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Portraits", "Gym", "Live Music", "Travel", "Weddings"];

// Placeholder images using Unsplash (portrait/people photography)
const shots = [
  {
    id: 101,
    category: "Portraits",
    src: "/p1.jpg",
    alt: "Portrait 1",
    aspect: "portrait",
  },
  {
    id: 102,
    category: "Portraits",
    src: "/p2.jpg",
    alt: "Portrait 2",
    aspect: "portrait",
  },
  {
    id: 103,
    category: "Portraits",
    src: "/p3.jpg",
    alt: "Portrait 3",
    aspect: "portrait",
  },
  {
    id: 104,
    category: "Portraits",
    src: "/p4.jpg",
    alt: "Portrait 4",
    aspect: "portrait",
  },
  {
    id: 105,
    category: "Portraits",
    src: "/p5.jpg",
    alt: "Portrait 5",
    aspect: "portrait",
  },
  {
    id: 106,
    category: "Portraits",
    src: "/p6.jpg",
    alt: "Portrait 6",
    aspect: "portrait",
  },
  {
    id: 107,
    category: "Portraits",
    src: "/p7.jpg",
    alt: "Portrait 7",
    aspect: "portrait",
  },
  {
    id: 108,
    category: "Portraits",
    src: "/p8.jpg",
    alt: "Portrait 8",
    aspect: "portrait",
  },
  {
    id: 109,
    category: "Portraits",
    src: "/p9.jpg",
    alt: "Portrait 9",
    aspect: "portrait",
  },
  {
    id: 110,
    category: "Portraits",
    src: "/p10.jpg",
    alt: "Portrait 10",
    aspect: "portrait",
  },
  {
    id: 111,
    category: "Portraits",
    src: "/p11.jpg",
    alt: "Portrait 11",
    aspect: "portrait",
  },
  {
    id: 112,
    category: "Portraits",
    src: "/p12.jpg",
    alt: "Portrait 12",
    aspect: "portrait",
  },
  {
    id: 113,
    category: "Portraits",
    src: "/p13.jpg",
    alt: "Portrait 13",
    aspect: "portrait",
  },
  {
    id: 115,
    category: "Portraits",
    src: "/p15.jpg",
    alt: "Portrait 15",
    aspect: "portrait",
  },
  {
    id: 116,
    category: "Portraits",
    src: "/p16.jpg",
    alt: "Portrait 16",
    aspect: "portrait",
  },
  {
    id: 117,
    category: "Portraits",
    src: "/p17.jpg",
    alt: "Portrait 17",
    aspect: "portrait",
  },
  {
    id: 118,
    category: "Portraits",
    src: "/p18.jpg",
    alt: "Portrait 18",
    aspect: "portrait",
  },
  {
    id: 119,
    category: "Portraits",
    src: "/p19.jpg",
    alt: "Portrait 19",
    aspect: "portrait",
  },
  {
    id: 120,
    category: "Portraits",
    src: "/p20.jpg",
    alt: "Portrait 20",
    aspect: "portrait",
  },
  {
    id: 121,
    category: "Portraits",
    src: "/p21.jpg",
    alt: "Portrait 21",
    aspect: "portrait",
  },
  {
    id: 122,
    category: "Portraits",
    src: "/p22.jpg",
    alt: "Portrait 22",
    aspect: "portrait",
  },
  {
    id: 123,
    category: "Portraits",
    src: "/p23.jpg",
    alt: "Portrait 23",
    aspect: "portrait",
  },
  {
    id: 124,
    category: "Portraits",
    src: "/p24.jpg",
    alt: "Portrait 24",
    aspect: "portrait",
  },
  {
    id: 125,
    category: "Portraits",
    src: "/p25.jpg",
    alt: "Portrait 25",
    aspect: "portrait",
  },
  {
    id: 127,
    category: "Portraits",
    src: "/p27.jpg",
    alt: "Portrait 27",
    aspect: "portrait",
  },
  {
    id: 128,
    category: "Portraits",
    src: "/p28.jpg",
    alt: "Portrait 28",
    aspect: "portrait",
  },
  {
    id: 129,
    category: "Portraits",
    src: "/p29.jpg",
    alt: "Portrait 29",
    aspect: "portrait",
  },
  {
    id: 130,
    category: "Portraits",
    src: "/p30.jpg",
    alt: "Portrait 30",
    aspect: "portrait",
  },
  {
    id: 100,
    category: "Portraits",
    src: "/p100.jpg",
    alt: "Portrait 100",
    aspect: "portrait",
  },
  {
    id: 201,
    category: "Gym",
    src: "/g1.jpg",
    alt: "Gym 1",
    aspect: "portrait",
  },
  {
    id: 202,
    category: "Gym",
    src: "/g2.jpg",
    alt: "Gym 2",
    aspect: "portrait",
  },
  {
    id: 203,
    category: "Gym",
    src: "/g3.jpg",
    alt: "Gym 3",
    aspect: "portrait",
  },
  {
    id: 204,
    category: "Gym",
    src: "/g4.jpg",
    alt: "Gym 4",
    aspect: "portrait",
  },
  {
    id: 301,
    category: "Live Music",
    src: "/l1.jpg",
    alt: "Live Music 1",
    aspect: "portrait",
  },
  {
    id: 302,
    category: "Live Music",
    src: "/l2.jpg",
    alt: "Live Music 2",
    aspect: "portrait",
  },
  {
    id: 303,
    category: "Live Music",
    src: "/l3.jpg",
    alt: "Live Music 3",
    aspect: "portrait",
  },
  {
    id: 304,
    category: "Live Music",
    src: "/l4.jpg",
    alt: "Live Music 4",
    aspect: "portrait",
  },
  {
    id: 305,
    category: "Live Music",
    src: "/l5.jpg",
    alt: "Live Music 5",
    aspect: "portrait",
  },
  {
    id: 306,
    category: "Live Music",
    src: "/l6.jpg",
    alt: "Live Music 6",
    aspect: "portrait",
  },
  {
    id: 307,
    category: "Live Music",
    src: "/l7.jpg",
    alt: "Live Music 7",
    aspect: "portrait",
  },
  {
    id: 308,
    category: "Live Music",
    src: "/l8.jpg",
    alt: "Live Music 8",
    aspect: "portrait",
  },
  {
    id: 309,
    category: "Live Music",
    src: "/l9.jpg",
    alt: "Live Music 9",
    aspect: "portrait",
  },
  {
    id: 401,
    category: "Travel",
    src: "/t1.jpg",
    alt: "Travel 1",
    aspect: "portrait",
  },
  {
    id: 402,
    category: "Travel",
    src: "/t2.jpg",
    alt: "Travel 2",
    aspect: "portrait",
  },
  {
    id: 403,
    category: "Travel",
    src: "/t3.jpg",
    alt: "Travel 3",
    aspect: "portrait",
  },
  {
    id: 404,
    category: "Travel",
    src: "/t4.jpg",
    alt: "Travel 4",
    aspect: "portrait",
  },
  {
    id: 405,
    category: "Travel",
    src: "/t5.jpg",
    alt: "Travel 5",
    aspect: "portrait",
  },
  {
    id: 406,
    category: "Travel",
    src: "/t6.jpg",
    alt: "Travel 6",
    aspect: "portrait",
  },
  {
    id: 407,
    category: "Travel",
    src: "/t7.jpg",
    alt: "Travel 7",
    aspect: "portrait",
  },
  {
    id: 408,
    category: "Travel",
    src: "/t8.jpg",
    alt: "Travel 8",
    aspect: "portrait",
  },
  {
    id: 409,
    category: "Travel",
    src: "/t9.jpg",
    alt: "Travel 9",
    aspect: "portrait",
  },
  {
    id: 410,
    category: "Travel",
    src: "/t10.jpg",
    alt: "Travel 10",
    aspect: "portrait",
  },
  {
    id: 411,
    category: "Travel",
    src: "/t11.jpg",
    alt: "Travel 11",
    aspect: "portrait",
  },
  {
    id: 412,
    category: "Travel",
    src: "/t12.jpg",
    alt: "Travel 12",
    aspect: "portrait",
  },
  {
    id: 413,
    category: "Travel",
    src: "/t13.jpg",
    alt: "Travel 13",
    aspect: "portrait",
  },
  {
    id: 414,
    category: "Travel",
    src: "/t14.jpg",
    alt: "Travel 14",
    aspect: "portrait",
  },
  {
    id: 415,
    category: "Travel",
    src: "/t15.jpg",
    alt: "Travel 15",
    aspect: "portrait",
  },
  {
    id: 416,
    category: "Travel",
    src: "/t16.jpg",
    alt: "Travel 16",
    aspect: "portrait",
  },
  {
    id: 417,
    category: "Travel",
    src: "/t17.jpg",
    alt: "Travel 17",
    aspect: "portrait",
  },
  {
    id: 418,
    category: "Travel",
    src: "/t18.jpg",
    alt: "Travel 18",
    aspect: "portrait",
  },
  {
    id: 419,
    category: "Travel",
    src: "/t19.jpg",
    alt: "Travel 19",
    aspect: "portrait",
  },
  {
    id: 420,
    category: "Travel",
    src: "/t20.jpg",
    alt: "Travel 20",
    aspect: "portrait",
  },
  {
    id: 421,
    category: "Travel",
    src: "/t21.jpg",
    alt: "Travel 21",
    aspect: "portrait",
  },
  {
    id: 422,
    category: "Travel",
    src: "/t22.jpg",
    alt: "Travel 22",
    aspect: "portrait",
  },
  {
    id: 423,
    category: "Travel",
    src: "/t23.jpg",
    alt: "Travel 23",
    aspect: "portrait",
  },
  {
    id: 424,
    category: "Travel",
    src: "/t24.jpg",
    alt: "Travel 24",
    aspect: "portrait",
  },
  {
    id: 501,
    category: "Weddings",
    src: "/w1.jpg",
    alt: "Wedding 1",
    aspect: "portrait",
  },
  {
    id: 502,
    category: "Weddings",
    src: "/w2.jpg",
    alt: "Wedding 2",
    aspect: "portrait",
  },
  {
    id: 503,
    category: "Weddings",
    src: "/w3.jpg",
    alt: "Wedding 3",
    aspect: "portrait",
  },
  {
    id: 504,
    category: "Weddings",
    src: "/w4.jpg",
    alt: "Wedding 4",
    aspect: "portrait",
  },
  {
    id: 505,
    category: "Weddings",
    src: "/w5.jpg",
    alt: "Wedding 5",
    aspect: "portrait",
  },
  {
    id: 506,
    category: "Weddings",
    src: "/w6.jpg",
    alt: "Wedding 6",
    aspect: "portrait",
  },
  {
    id: 507,
    category: "Weddings",
    src: "/w7.jpg",
    alt: "Wedding 7",
    aspect: "portrait",
  },
  {
    id: 508,
    category: "Weddings",
    src: "/w8.jpg",
    alt: "Wedding 8",
    aspect: "portrait",
  },
  {
    id: 509,
    category: "Weddings",
    src: "/w9.jpg",
    alt: "Wedding 9",
    aspect: "portrait",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? shots : shots.filter((s) => s.category === active);

  return (
    <section id="portfolio" className="py-28 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-amber-400/70 tracking-[0.3em] uppercase text-xs mb-3">
          Work
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-100">
          Portfolio
        </h2>
      </div>

      {/* Category filter */}
      <div className="flex overflow-x-auto pb-2 justify-start sm:justify-center gap-2 mb-12 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`flex-shrink-0 px-5 py-2 text-xs tracking-widest uppercase transition-all duration-200 ${
              active === cat
                ? "bg-amber-200 text-stone-950 font-medium"
                : "border border-stone-700 text-stone-400 hover:border-amber-200 hover:text-amber-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stable grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((shot) => (
          <div
            key={shot.id}
            className="group relative overflow-hidden bg-stone-900 cursor-pointer aspect-[3/4]"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/40 transition-all duration-300 flex items-end p-5">
              <span className="text-stone-100 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {shot.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
