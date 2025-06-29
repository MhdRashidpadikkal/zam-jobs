import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next'
import ToastProvider from "./ToastProvider";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
          <Providers>
            <ToastProvider>
            {children}
            </ToastProvider>
            <Footer />
            <Analytics />
          </Providers>
      </body>
    </html>
  );
}
