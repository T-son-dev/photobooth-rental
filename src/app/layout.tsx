import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnapBooth | Renta de Photobooth Premium para Eventos",
  description:
    "Renta de photobooths de última generación para bodas, eventos corporativos, XV años y más. 360° Photo Booth, Mirror Booth, Open Air y GIF Booth. Servicio profesional en Monterrey y área metropolitana.",
  keywords: [
    "photobooth",
    "renta photobooth",
    "photo booth boda",
    "360 photo booth",
    "mirror booth",
    "eventos monterrey",
    "cabina de fotos",
  ],
  openGraph: {
    title: "SnapBooth | Renta de Photobooth Premium",
    description:
      "Transforma tu evento en una experiencia inolvidable con nuestros photobooths de última generación.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
