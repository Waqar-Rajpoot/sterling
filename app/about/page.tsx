import type { Metadata } from "next";
import Image from "next/image";
import { PageHeaderBanner } from "@/components/PageHeaderBanner";
import { ClosingCta } from "@/components/ClosingCta";
import { business, whatSetsUsApart } from "@/lib/business";

export const metadata: Metadata = {
  title: `Our Story — ${business.name}`,
  description: "Starling family run hospitality on the Islamabad motorway.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeaderBanner eyebrow="About" title="Our Story" />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <div className="space-y-5 text-asphalt/80 leading-relaxed order-2 lg:order-1">
          <p>
            {business.name} began with a simple observation: travelers moving
            through Islamabad on the main motorway needed somewhere dependable to stop and at the
            time, few options offered both safety and an honest price. What started as a small,
            family-run guest house has grown steadily since, not through expansion for its own
            sake, but by earning the trust of the people who stayed with us and came back.
          </p>
          <p>
            Over the years, our guests have changed families relocating between cities,
            transporters on long routes, visitors arriving from other countries for business or
            to see relatives but our approach has not. Every guest is treated as someone we
            want to see again, not as a one-time transaction.
          </p>
          <p>
            Today, {business.name} stands as one of the more recognized names for motorway
            travelers passing through Islamabad built on word of mouth, repeat visits, and fifteen
            years of showing up, every single day, for whoever needed a place to rest.
          </p>
        </div>
        <div className="relative aspect-[6/5] rounded-sm overflow-hidden order-1 lg:order-2">
          <Image
            src="/images/3.png"
            alt={`${business.name} building on the Islamabad motorway`}
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-concrete">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-concrete-soft border-l-4 border-amber p-8 rounded-sm">
              <p className="marker-label text-amber-dim mb-3">Our Mission</p>
              <p className="font-display text-xl md:text-2xl tracking-wide text-asphalt leading-snug">
                To give every traveler passing through Islamabad  a safe, clean, and affordable place
                to stay — delivered with the honesty and personal care of a family-run business.
              </p>
            </div>
            <div className="bg-concrete-soft border-l-4 border-route-green p-8 rounded-sm">
              <p className="marker-label text-amber-dim mb-3">Our Vision</p>
              <p className="font-display text-xl md:text-2xl tracking-wide text-asphalt leading-snug">
                To be the most trusted name for motorway travelers in Islamabad — known not for size,
                but for the consistency and quality of hospitality we offer every guest, every
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="marker-label text-amber-dim mb-2">Our Experience</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-wide text-asphalt mb-6 max-w-lg">
          What on This Road Has Taught Us
        </h2>
        <p className="text-asphalt/80 leading-relaxed max-w-2xl">
          Starling hospitality teaches details that don&apos;t show up in a brochure: how
          to have a room ready at any hour, how to keep pricing fair even during peak travel
          seasons, and how to read what a tired traveler actually needs without them having to
          ask. That experience shows up in small ways — a fast check-in after a long drive, an
          extra bed found for a family arriving unannounced, staff who remain calm and helpful no
          matter the hour.
        </p>
      </section>

      <section className="bg-asphalt text-concrete">
        {/* <div className="route-line" aria-hidden="true" /> */}
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="marker-label text-amber mb-2">What Sets Us Apart</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-10 max-w-lg">
            The Difference Starling Makes
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {whatSetsUsApart.map((item) => (
              <div key={item.title} className="border-t-2 border-amber/50 pt-4">
                <h3 className="font-display text-lg tracking-wide mb-2">{item.title}</h3>
                <p className="text-sm text-concrete/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta headline="Come See What Starling Consistency Looks Like." showRoomsLink />
    </>
  );
}
