"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const UIProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
};

export default UIProvider;
