import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UNIFIGHT – Универсальный бой",
  description: "Тренировки по универсальному бою в Таджикистане. Сила, выносливость, дисциплина.",
  viewport: "width=device-width, initial-scale=1",
  verification: {
    google: "google3d0b5ecc73205155"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col pb-[80px]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
