import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { RegisterProvider } from "@/layouts/Register/RegisterProvider";

const MontserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Алёне тридцатка",
  description: "Все что нужно",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <RegisterProvider>
        <body className={`${MontserratSans.variable}`}>{children}</body>
      </RegisterProvider>
    </html>
  );
}
