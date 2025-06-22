import localFont from "next/font/local";
export const roboto = localFont({
  src: [
    {
      path: "./Roboto/Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Roboto/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Roboto/Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-roboto",
  display: "swap",
});

export const playwrite = localFont({
  src: [
    {
      path: "./Playwrite_IN/PlaywriteIN-VariableFont_wght.ttf",
    },
  ],
  variable: "--font-playwrite",
  display: "swap",
});

export const PTSerif = localFont({
  src: [
    {
      path: "./PT_Serif/PTSerif-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./PT_Serif/PTSerif-Bold.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./PT_Serif/PTSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PT_Serif/PTSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-pt-serif",
  display: "swap",
});
