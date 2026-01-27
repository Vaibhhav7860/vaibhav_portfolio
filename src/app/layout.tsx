import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaibhav Oberoi | Senior Software Engineer | Python Developer",
  description:
    "Senior Software Engineer with 5+ years of experience in backend Python development. Offering custom software development, graphics designing, and video editing services. Let's build something amazing together.",
  keywords: [
    "Software Engineer",
    "Python Developer",
    "Backend Developer",
    "Freelance Developer",
    "Custom Software Development",
    "Graphics Design",
    "Video Editing",
    "Senior Developer",
  ],
  authors: [{ name: "Vaibhav Oberoi" }],
  creator: "Vaibhav Oberoi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaibhavoberoi.com",
    siteName: "Vaibhav Oberoi Portfolio",
    title: "Vaibhav Oberoi | Senior Software Engineer",
    description:
      "Senior Software Engineer with 5+ years of experience in backend Python development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vaibhav Oberoi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Oberoi | Senior Software Engineer",
    description:
      "Senior Software Engineer with 5+ years of experience in backend Python development.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
