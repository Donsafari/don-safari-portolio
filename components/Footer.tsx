export default function Footer() {
  return (
    <footer className="border-t border-stone-800/50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-600 text-xs">
        <p className="font-serif text-stone-500">Donsafari</p>
        <p>© {new Date().getFullYear()} — All rights reserved</p>
        <div className="flex gap-6">
          {["Instagram", "LinkedIn", "VSCO"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="hover:text-amber-200 tracking-wide transition-colors uppercase"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
