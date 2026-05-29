import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hotel Fazenda Parque dos Sonhos | Socorro-SP",
    template: "%s | Parque dos Sonhos",
  },
  description:
    "O maior complexo de aventura de Socorro-SP. Hotel fazenda com tirolesa de 1km, arvorismo, bóia-cross, cachoeiras e total acessibilidade. Certificado ISO em segurança e acessibilidade.",
  keywords: [
    "hotel fazenda Socorro SP",
    "Parque dos Sonhos",
    "tirolesa Socorro",
    "turismo de aventura",
    "ecoturismo Socorro",
    "hotel acessível Socorro",
    "arvorismo Socorro",
    "bóia-cross Socorro",
    "day-use Socorro",
  ],
  metadataBase: new URL("https://parquedossonhos.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Hotel Fazenda Parque dos Sonhos",
    title: "Hotel Fazenda Parque dos Sonhos | Socorro-SP",
    description:
      "O maior complexo de aventura de Socorro-SP. Natureza, adrenalina e conforto em uma experiência única.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-pds-bone text-pds-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
