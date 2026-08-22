import type { Metadata } from "next";
import { PageHeaderBanner } from "@/components/PageHeaderBanner";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: `Get in Touch — ${business.name}`,
  description: "Reach Sterlingone Hospitality motorway Stop by phone, WhatsApp, or email — answered any hour, any day.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    business.address.mapQuery
  )}&output=embed`;

  return (
    <>
      <PageHeaderBanner
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Whether you're ready to book or just have a question, reach us directly. We answer quickly, at any hour, because travelers don't plan their journeys around office hours."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20 grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
        <div className="space-y-8">
          <div>
            <p className="marker-label text-amber-dim mb-4">Contact Details</p>
            <ul className="space-y-5">
              <ContactRow icon="pin" label="Address">
                {business.address.line2}
                <br />
                {business.address.city}, {business.address.country}
              </ContactRow>
              <ContactRow icon="phone" label="Phone">
                <a href={`tel:${business.phone.href}`} className="hover:text-amber-dim">
                  {business.phone.display}
                </a>
              </ContactRow>
              <ContactRow icon="whatsapp" label="WhatsApp">
                <a
                  href={`https://wa.me/${business.whatsapp.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-dim"
                >
                  {business.whatsapp.display}
                </a>
              </ContactRow>
              <ContactRow icon="mail" label="Email">
                <a href={`mailto:${business.email}`} className="hover:text-amber-dim">
                  {business.email}
                </a>
              </ContactRow>
              <ContactRow icon="clock" label="Hours">
                {business.hours}
              </ContactRow>
            </ul>
          </div>

          <div className="rounded-sm overflow-hidden border border-asphalt/10">
            <iframe
              title={`Map to ${business.name}`}
              src={mapSrc}
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-sm text-asphalt/60 leading-relaxed">
            Located directly on the Islamabad main motorway, easily visible from the road with
            dedicated guest parking on-site. Exact directions and a live map pin are shown above
            for visitors arriving from out of town.
          </p>
        </div>

        <div className="bg-concrete border border-asphalt/10 rounded-sm p-6 md:p-8">
          <p className="marker-label text-amber-dim mb-2">Send a Message</p>
          <h2 className="font-display text-2xl tracking-wide text-asphalt mb-6">
            Prefer to Message Instead of Call?
          </h2>
          <ContactForm />
        </div>
      </section>

      <section className="bg-asphalt text-concrete">
        <div className="mx-auto max-w-6xl px-5 py-12 text-center">
          <p className="font-display text-2xl md:text-3xl tracking-wide">
            Wherever your journey starts, we&apos;re easy to find — and ready to welcome you.
          </p>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: "pin" | "phone" | "whatsapp" | "mail" | "clock";
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-9 h-9 rounded-sm bg-asphalt text-amber flex items-center justify-center shrink-0">
        <Icon name={icon} className="w-4 h-4" />
      </span>
      <div>
        <p className="font-mono text-[0.65rem] uppercase tracking-wide text-asphalt/50">
          {label}
        </p>
        <p className="text-sm text-asphalt/85 leading-snug">{children}</p>
      </div>
    </li>
  );
}
