import "./globals.css";
import { Inter } from "next/font/google";
import Providers from './providers';
import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zam Job",
  description: "Job portal and management system",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
      <CssBaseline />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
