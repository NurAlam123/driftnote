import localFont from "next/font/local";
export const roboto = localFont({
  src: [
    {
      path: "./Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Roboto/Roboto-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-roboto",
});
