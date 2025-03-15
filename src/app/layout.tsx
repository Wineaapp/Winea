import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { frFR } from "@clerk/localizations";

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-jakarta",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: "Winea | Trouve ton produit gagnant en un clic",
  description: "Trouve ton produit gagnant en un clic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={frFR}>
      <html lang="en">
        <body className={`${jakarta.variable}  antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
