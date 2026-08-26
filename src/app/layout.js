import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
    canonical: "https://esilva.xyz",
  },
  icons: {
    apple: "/apple-touch-icon.png",
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
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme by reading preference before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-xp-desktop text-xp-text font-sans text-[13px] leading-relaxed antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
