"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <NextUIProvider>
      {/* {children} */}
      <NextThemeProvider attribute="class" defaultTheme="light">{children}</NextThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;
