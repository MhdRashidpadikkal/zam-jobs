"use client";

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Inter } from "next/font/google";
import "./globals.css";
import { theme } from "../theme";
import Header from "../components/Header";

const clientSideEmotionCache = createCache({
  key: 'css',
  prepend: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
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
            <div className={`${inter.variable} font-sans`}>
              <Header />
              <main>{children}</main>
            </div>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
