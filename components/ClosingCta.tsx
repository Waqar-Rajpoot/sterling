import { business } from "@/lib/business";
import { CtaLink } from "./CtaLink";

export function ClosingCta({
  headline,
  showRoomsLink = false,
}: {
  headline: string;
  showRoomsLink?: boolean;
}) {
  return (
    <section className="bg-amber text-asphalt">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <h2 className="font-display text-3xl md:text-4xl tracking-wide max-w-md leading-[0.95]">
          {headline}
        </h2>
        <div className="flex flex-wrap gap-3">
          <CtaLink href={`tel:${business.phone.href}`} variant="ghost" icon="phone">
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
          {showRoomsLink && (
            <CtaLink href="/rooms/" variant="ghost" icon="arrow">
              View All Rooms
            </CtaLink>
          )}
        </div>
      </div>
    </section>
  );
}
