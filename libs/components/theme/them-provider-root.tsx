import { PropsWithChildren } from "react";

import { ThemeProvider } from "./theme-provider";

export const ThemProviderRoot = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
