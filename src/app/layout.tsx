"use client";

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { theme } from "../theme";
import Header from "../components/Header";

const clientSideEmotionCache = createCache({
  key: 'css',
  prepend: true,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider value={clientSideEmotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
              <Header />
              <main>{children}</main>
            </div>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
