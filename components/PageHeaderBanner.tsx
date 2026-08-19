export function PageHeaderBanner({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="sodium-glow text-concrete">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-14 md:pt-20 md:pb-16">
        <p className="marker-label text-amber mb-3">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-6xl tracking-wide leading-[0.95]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-concrete/75 text-base md:text-lg">{subtitle}</p>
        )}
      </div>
      {/* <div className="route-line" aria-hidden="true" /> */}
    </section>
  );
}
