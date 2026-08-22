import Link from "next/link";
import { business } from "@/lib/business";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="bg-asphalt text-concrete/80">
      {/* <div className="route-line" aria-hidden="true" /> */}
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <span className="font-display text-xl tracking-wide text-concrete">Sterlingone Hospitality</span>
          <p className="mt-3 text-sm leading-relaxed max-w-xs">
            A dependable stop on the Islamabad motorway clean rooms, fair prices, and a door
            that&apos;s open at any hour.
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm">
            <Icon name="pin" className="w-4 h-4 mt-0.5 text-amber shrink-0" />
            <span>
              {business.address.line2}
              <br />
              {business.address.city}, {business.address.country}
            </span>
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-amber mb-3">
            Quick Links
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
            <li><Link href="/rooms/" className="hover:text-amber transition-colors">Rooms</Link></li>
            <li><Link href="/about/" className="hover:text-amber transition-colors">About</Link></li>
            <li><Link href="/contact/" className="hover:text-amber transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-amber mb-3">
            Reach Us
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${business.phone.href}`} className="flex items-center gap-2 hover:text-amber transition-colors">
                <Icon name="phone" className="w-4 h-4" /> {business.phone.display}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${business.whatsapp.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber transition-colors"
              >
                <Icon name="whatsapp" className="w-4 h-4" /> WhatsApp Us
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-amber transition-colors">
                <Icon name="mail" className="w-4 h-4" /> {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 flex items-center justify-center">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-concrete/50 font-mono">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
