// app/providers.tsx
"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store/slices/store";
import { theme } from "@/theme";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

const clientSideEmotionCache = createCache({
  key: "css",
  prepend: true,
});

export default function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
  return (
    <ReduxProvider store={store}>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {pathname !== '/' && <Header /> }
          {children}
        </ThemeProvider>
      </CacheProvider>
    </ReduxProvider>
  );
}
