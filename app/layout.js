import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NexoraNavbar from "@/components/navbar";
import SessionProviderWrapper from "../components/SessionProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexora",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProviderWrapper>
          <NexoraNavbar />
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
