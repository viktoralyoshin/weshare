"use client";

import UIProvider from "./providers/next-ui-provider";
import { QueryProvider } from "./providers/query-provider";

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <QueryProvider>
      <UIProvider>{children}</UIProvider>
    </QueryProvider>
  );
};

export default Providers;
