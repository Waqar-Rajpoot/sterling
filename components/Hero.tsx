import Image from "next/image";
import { business } from "@/lib/business";
import { CtaLink } from "./CtaLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-asphalt">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-exterior.svg"
          alt={`${business.name} exterior at night on the Multan highway`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/60 to-asphalt/10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-20 md:pt-36 md:pb-28">
        <p className="marker-label text-amber mb-4">Multan Main Highway · Open 24 Hours</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl tracking-wide text-concrete leading-[0.95] max-w-3xl">
          A Trusted Place to Rest, Right on the Multan Highway.
        </h1>
        <p className="mt-6 max-w-xl text-concrete/80 text-base md:text-lg leading-relaxed">
          For fifteen years, travelers from every district — and from across borders — have
          chosen {business.name} for clean rooms, fair prices, and a welcome that never depends
          on the hour you arrive.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink href="/rooms/" variant="amber" icon="arrow">
            Check Room Availability
          </CtaLink>
          <CtaLink href={`tel:${business.phone.href}`} variant="outline" icon="phone">
            Call Now
          </CtaLink>
          <CtaLink
            href={`https://wa.me/${business.whatsapp.href}`}
            variant="outline"
            external
            icon="whatsapp"
          >
            Message on WhatsApp
          </CtaLink>
        </div>
      </div>
      {/* <div className="route-line relative" aria-hidden="true" /> */}
    </section>
  );
}
