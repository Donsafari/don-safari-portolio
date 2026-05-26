export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-950 px-6">
      <div className="text-center max-w-md">
        <p className="text-amber-200/70 tracking-[0.3em] uppercase text-xs mb-4">
          Order Confirmed
        </p>
        <h1 className="font-serif text-4xl text-stone-100 mb-4">
          Thank you!
        </h1>
        <p className="text-stone-400 font-light leading-relaxed mb-8">
          Your preset pack has been purchased successfully. Check your email for
          your download link.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3.5 bg-amber-200 text-stone-950 text-sm font-medium tracking-widest uppercase hover:bg-amber-100 transition-colors duration-200"
        >
          Back to Site
        </a>
      </div>
    </div>
  );
}
