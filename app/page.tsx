import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { StatsStrip } from "@/components/StatsStrip";
import { Testimonials } from "@/components/Testimonials";
import { ClosingCta } from "@/components/ClosingCta";
import { RoomCard } from "@/components/RoomCard";
import { business, rooms } from "@/lib/business";
import { CtaLink } from "@/components/CtaLink";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <p className="marker-label text-amber-dim">Welcome</p>
          <div className="space-y-5 text-asphalt/80 leading-relaxed">
            <p>
              Multan is a crossroads city — a place people pass through on their way somewhere
              else. For fifteen years, {business.name} has been the dependable stop along that
              journey: a family-run guest house positioned directly on the main highway, built
              specifically for travelers who need rest, not a lobby full of formalities.
            </p>
            <p>
              We don&apos;t compete on size. We compete on consistency — the same clean room,
              the same fair price, and the same door open to you whether you arrive at noon or at
              3 in the morning. That reliability is why transporters, visiting families, and
              repeat travelers keep coming back to the same address year after year.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <StatsStrip />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="marker-label text-amber-dim mb-2">Featured Rooms</p>
            <h2 className="font-display text-3xl md:text-4xl tracking-wide text-asphalt">
              Choose the room that fits your trip.
            </h2>
          </div>
          <CtaLink href="/rooms/" variant="ghost" icon="arrow" className="hidden sm:inline-flex">
            View All Rooms
          </CtaLink>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} compact />
          ))}
        </div>
      </section>

      <Testimonials />

      <ClosingCta headline="Passing Through Multan? Your Room Is Ready." showRoomsLink />
    </>
  );
}
