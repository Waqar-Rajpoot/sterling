import Image from "next/image";
import type { RoomType } from "@/lib/business";
import { CtaLink } from "./CtaLink";
import { business } from "@/lib/business";

export function RoomCard({ room, compact = false }: { room: RoomType; compact?: boolean }) {
  return (
    <div className="bg-concrete-soft border border-asphalt/10 rounded-sm overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3] bg-asphalt/5">
        <Image src={room.image} alt={`${room.name} at ${business.name}`} fill className="object-cover" />
        <span className="absolute top-3 left-3 bg-asphalt text-amber font-mono text-xs uppercase tracking-wide px-2.5 py-1 rounded-sm">
          {room.priceFrom} <span className="text-concrete/60">{room.priceUnit}</span>
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-xl tracking-wide text-asphalt">{room.name}</h3>
        <p className="text-xs font-mono uppercase tracking-wide text-amber-dim mt-1 mb-3">
          {room.bestFor}
        </p>
        {!compact && (
          <>
            <p className="text-sm text-asphalt/70 leading-relaxed mb-4">{room.description}</p>
            <ul className="flex flex-wrap gap-2 mb-5">
              {room.amenities.map((a) => (
                <li
                  key={a}
                  className="text-xs font-mono uppercase tracking-wide bg-asphalt/5 text-asphalt/70 px-2.5 py-1 rounded-sm"
                >
                  {a}
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="mt-auto pt-2">
          {compact ? (
            <CtaLink href="/rooms/" variant="ghost" icon="arrow" className="w-full">
              View Details
            </CtaLink>
          ) : (
            <div className="flex flex-wrap gap-2">
              <CtaLink href={`tel:${business.phone.href}`} variant="amber" icon="phone">
                Call Now
              </CtaLink>
              <CtaLink
                href={`https://wa.me/${business.whatsapp.href}?text=${encodeURIComponent(
                  `Hi, I'd like to check availability for the ${room.name}.`
                )}`}
                variant="ghost"
                external
                icon="whatsapp"
              >
                WhatsApp
              </CtaLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
