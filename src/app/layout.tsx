
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from './providers';
import { CssBaseline } from "@mui/material";

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
      <CssBaseline />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
