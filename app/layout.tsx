import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/modules/Header/Header";
import { GlobalContext } from "@/context/Context";
import { QueryProvider } from "@/provider/QueryProvider";
import Footer from "@/modules/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashyo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalContext>
          <QueryProvider>
            <Header />
            {children}
            <Footer />
          </QueryProvider>
        </GlobalContext>
      </body>
    </html>
  );
}
