import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PhantomDev Portfolio | Creative Next.js Showcase",
  description: "Modern, interactive, and blazing-fast Next.js portfolio by PhantomDev, UI-rich, performance-focused.",
  keywords: ["PhantomDev", "Next.js Portfolio", "Frontend Developer", "React", "JavaScript", "Tailwind CSS"],
  authors: [{ name: "Mr Phantom X", url: "https://your-domain.vercel.app" }],
  creator: "Mr Phantom X",
  metadataBase: new URL("https://your-domain.vercel.app"),

  openGraph: {
    title: "PhantomDev Portfolio | Creative Next.js Showcase",
    description: "Modern, interactive, and blazing-fast Next.js portfolio by PhantomDev, UI-rich, performance-focused.",
    url: "https://your-domain.vercel.app",
    siteName: "PhantomDev",
    images: [
      {
        url: "/portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "PhantomDev Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PhantomDev Portfolio | Creative Next.js Showcase",
    description: "Check out the blazing-fast portfolio by Mr Phantom X, built with Next.js & Tailwind.",
    images: ["/portfolio.jpg"],
    creator: "@PhantomXDev", 
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          
            {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
