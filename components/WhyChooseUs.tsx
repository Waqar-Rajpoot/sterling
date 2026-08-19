import { whyChooseUs } from "@/lib/business";
import { Icon, type IconName } from "./Icon";

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <p className="marker-label text-amber-dim mb-2">Why Choose Us</p>
      <h2 className="font-display text-3xl md:text-4xl tracking-wide text-asphalt mb-10 max-w-lg">
        Not the biggest stop on the motorway. The one you can count on.
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {whyChooseUs.map((item) => (
          <div
            key={item.title}
            className="bg-concrete border border-asphalt/10 rounded-sm p-6 hover:border-amber transition-colors"
          >
            <div className="w-11 h-11 rounded-sm bg-asphalt text-amber flex items-center justify-center mb-4">
              <Icon name={item.icon as IconName} className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg tracking-wide text-asphalt mb-1.5">
              {item.title}
            </h3>
            <p className="text-sm text-asphalt/70 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
