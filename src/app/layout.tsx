import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-sans-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveen Khan — AI Engineer",
  description:
    "AI Engineer based in Karachi, Pakistan. Building intelligent systems across machine learning, generative AI, computer vision and intelligent automation.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "RAG",
    "Computer Vision",
    "Full-Stack AI",
    "Naveen Khan",
    "Karachi",
  ],
  authors: [{ name: "Naveen Khan" }],
  openGraph: {
    title: "Naveen Khan — AI Engineer",
    description:
      "Building intelligent systems for real-world problems. AI Engineer based in Karachi, Pakistan.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Khan — AI Engineer",
    description: "Building intelligent systems for real-world problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        style={{
          fontFamily: "var(--font-sans-inter), system-ui, sans-serif",
          background: "var(--color-ivory)",
          color: "var(--color-navy)",
        }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
