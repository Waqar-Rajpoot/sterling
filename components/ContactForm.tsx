"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/lib/business";
import { Icon } from "./Icon";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const checkin = String(data.get("checkin") ?? "");
    const guests = String(data.get("guests") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Room Inquiry from ${name || "Website Visitor"}`;
    const body = [
      `Name: ${name}`,
      `Phone Number: ${phone}`,
      `Preferred Check-in Date: ${checkin || "Not specified"}`,
      `Number of Guests: ${guests || "Not specified"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto = `mailto:${business.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Preferred Check-in Date" name="checkin" type="date" />
        <Field label="Number of Guests" name="guests" type="number" min={1} />
      </div>
      <div>
        <label className="block font-mono text-xs uppercase tracking-wide text-asphalt/70 mb-1.5">
          Message / Special Request
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-sm border border-asphalt/20 bg-concrete-soft px-3.5 py-2.5 text-sm text-asphalt focus:border-amber focus:outline-none"
          placeholder="Tell us about your stay — arrival time, room type, anything else we should know."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-sm bg-amber text-asphalt font-mono text-sm font-semibold uppercase tracking-wide px-6 py-3.5 hover:bg-amber-dim transition-colors"
      >
        <Icon name="mail" className="w-4 h-4" />
        Send via Email
      </button>

      <p className="text-xs text-asphalt/60 leading-relaxed">
        This opens your email app with the details filled in — nothing is sent automatically.
        Prefer to talk now? Use the call or WhatsApp buttons above instead.
      </p>

      {submitted && (
        <p role="status" className="text-sm font-medium text-route-green">
          Your email app should be opening now with your message ready to send.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  min?: number;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-xs uppercase tracking-wide text-asphalt/70 mb-1.5"
      >
        {label}
        {required && <span className="text-caution"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        min={min}
        className="w-full rounded-sm border border-asphalt/20 bg-concrete-soft px-3.5 py-2.5 text-sm text-asphalt focus:border-amber focus:outline-none"
      />
    </div>
  );
}
