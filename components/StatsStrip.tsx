import { business } from "@/lib/business";

export function StatsStrip() {
  return (
    <section className="bg-asphalt text-concrete">
      {/* <div className="route-line" aria-hidden="true" /> */}
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {business.stats.map((stat, i) => (
            <div key={stat.label} className="relative pl-4 border-l-2 border-amber/40">
              <p className="marker-label text-amber/70 mb-1">MI {String((i + 1) * 7).padStart(2, "0")}</p>
              <p className="font-mono text-3xl md:text-4xl font-semibold text-concrete">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-concrete/60 mt-1 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="route-line" aria-hidden="true" /> */}
    </section>
  );
}
