import "server-only";

import { ThemProviderRoot } from "@components/theme/them-provider-root";
import { fixel } from "@fonts/font-fixel";
import { LayoutProps } from "@typeslib/app";
import "./globals.css";

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fixel.variable} ${fixel.className} antialiased`}>
        <ThemProviderRoot>{children}</ThemProviderRoot>
      </body>
    </html>
  );
};

export default RootLayout;
