import localFont from "next/font/local";

export const fixel = localFont({
  src: "./fixel/FixelVariable.ttf",
  display: "swap",
  variable: "--font-fixel",
  weight: "400 700",
  style: "normal",
});
