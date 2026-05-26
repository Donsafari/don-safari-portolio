const presetDownloads: Record<string, { name: string; url: string }> = {
  price_1TbNjD35QywjBrcA11jgPKLY: {
    name: "Preset Pack 1",
    url: "https://drive.google.com/uc?export=download&id=1cOrdfY5PFFlUvXacYbq1Y1MyK_lrrNcj",
  },
  price_1TbSif35QywjBrcAxrL8jbyX: {
    name: "Donsafari Preset 2",
    url: "https://drive.google.com/uc?export=download&id=1oqaH60H-idzhpuGoTz7Ecbj4VDEYrVPF",
  },
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ preset?: string }>;
}) {
  const { preset } = await searchParams;
  const download = preset ? presetDownloads[preset] : null;

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
          Your {download?.name ?? "preset"} has been purchased successfully.
          Click below to download.
        </p>
        {download && (
          <a
            href={download.url}
            className="inline-block px-8 py-3.5 bg-amber-200 text-stone-950 text-sm font-medium tracking-widest uppercase hover:bg-amber-100 transition-colors duration-200 mb-4"
          >
            Download {download.name}
          </a>
        )}
        <br />
        <a
          href="/"
          className="inline-block mt-4 text-stone-500 text-sm hover:text-stone-300 transition-colors duration-200"
        >
          Back to Site
        </a>
      </div>
    </div>
  );
}
