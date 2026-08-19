import { testimonials } from "@/lib/business";

export function Testimonials() {
  return (
    <section className="bg-route-green text-concrete-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="marker-label text-amber mb-2">Guest Testimonials</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-10 max-w-lg">
          What travelers say after the door closes behind them.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.quote}
              className="bg-concrete-soft/5 border border-concrete-soft/15 rounded-sm p-7"
            >
              <p className="text-lg md:text-xl leading-relaxed font-body">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-5 font-mono text-xs uppercase tracking-wide text-amber">
                — {t.name}, {t.detail}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
