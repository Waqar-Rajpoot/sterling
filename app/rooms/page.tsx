import type { Metadata } from "next";
import { PageHeaderBanner } from "@/components/PageHeaderBanner";
import { RoomCard } from "@/components/RoomCard";
import { CtaLink } from "@/components/CtaLink";
import { Icon } from "@/components/Icon";
import { business, generalAmenities, rooms } from "@/lib/business";

export const metadata: Metadata = {
  title: `Our Rooms — ${business.name}`,
  description: "Standard, Family, and Deluxe rooms at Sterling Highway Stop on the Islamabad highway — clean, secure, and ready any hour.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHeaderBanner
        eyebrow="Rooms"
        title="Our Rooms"
        subtitle="Every room at Sterling Highway Stop is cleaned and inspected before check-in. Choose the option that fits your trip — from a quick overnight stop to a stay with the whole family."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </section>

      <section className="bg-asphalt text-concrete">
        {/* <div className="route-line" aria-hidden="true" /> */}
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="marker-label text-amber mb-2">Every Room Includes</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-10 max-w-lg">
            General Amenities
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {generalAmenities.map((item) => (
              <li key={item} className="flex items-start gap-3 text-concrete/80 text-sm leading-relaxed">
                <Icon name="route" className="w-4 h-4 mt-1 text-amber shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-concrete">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-asphalt/80 max-w-md leading-relaxed">
            Reserve by phone or WhatsApp and we&apos;ll confirm your room the same day. Online
            booking is planned for a future update to the site.
          </p>
          <div className="flex flex-wrap gap-3">
            <CtaLink href={`tel:${business.phone.href}`} variant="amber" icon="phone">
              Call Now
            </CtaLink>
            <CtaLink
              href={`https://wa.me/${business.whatsapp.href}`}
              variant="ghost"
              external
              icon="whatsapp"
            >
              WhatsApp Us
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
