// app/providers.tsx
"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store/store";
import { theme } from "@/theme";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/AuthContext";
import { SnackbarProvider } from "notistack";

const clientSideEmotionCache = createCache({
  key: "css",
  prepend: true,
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <SnackbarProvider maxSnack={3}>
          <CacheProvider value={clientSideEmotionCache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {pathname !== '/' && pathname !== '/jobs' && <Header />}
              {children}
            </ThemeProvider>
          </CacheProvider>
        </SnackbarProvider>
      </AuthProvider>
    </ReduxProvider>
  );
}
