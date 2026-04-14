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

export const metadata = {
  metadataBase: new URL("https://esilva.xyz"),
  title: "Portafolio | Estudiante de Ingeniería Civil Informática",
  description:
    "Portafolio personal enfocado en desarrollo de software, backend y sistemas escalables.",
  keywords: [
    "portafolio",
    "ingeniería civil informática",
    "desarrollador full stack",
    "backend",
    "software",
  ],
  authors: [{ name: "Estudiante de Ingeniería Civil Informática" }],
  creator: "Estudiante de Ingeniería Civil Informática",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Portafolio | Estudiante de Ingeniería Civil Informática",
    description:
      "Portafolio personal enfocado en desarrollo de software, backend y sistemas escalables.",
    url: "https://esilva.xyz",
    siteName: "Portafolio",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Silva Arellana - Ingeniería Civil Informática",
    description:
      "Portafolio personal enfocado en desarrollo de software, backend y sistemas escalables.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
