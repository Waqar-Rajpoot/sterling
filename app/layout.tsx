import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: `${business.name} — ${business.tagline}`,
  description:
    "A trusted, 24-hour guest house directly on the Islamabad highway. Clean rooms, fair prices, and a welcome that never depends on the hour you arrive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
