import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import FloatingLeaves from "@/components/FloatingLeaves";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"]
});

const serif = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Golden Retreats — Time together. Memories forever.",
  description:
    "Unhurried family retreats designed for rest, connection, and joy. Shared meals, gentle kids’ activities, and slow nature days.",
  openGraph: {
    title: "Golden Retreats",
    description: "Time together. Memories forever.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-[var(--font-sans)] antialiased">
        <FloatingLeaves />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
