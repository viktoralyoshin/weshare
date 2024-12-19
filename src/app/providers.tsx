"use client";

import UIProvider from "./providers/next-ui-provider";
import { QueryProvider } from "./providers/query-provider";
import ZustandProvider from "./providers/zustand.provider";

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <QueryProvider>
      <ZustandProvider>
        <UIProvider>{children}</UIProvider>
      </ZustandProvider>
    </QueryProvider>
  );
};

export default Providers;
