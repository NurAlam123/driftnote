import type { Metadata } from "next";
import "./globals.css";
import { playwrite, PTSerif, roboto } from "@/fonts";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "Ghosto",
    template: "%s | Ghosto",
  },
  description: "Share your ghostly thoughts freely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Ghosto" />
      </head>
      <body
        className={`${roboto.variable} ${PTSerif.variable} ${playwrite.variable} font-roboto antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors position="top-center" />
          <div className="max-w-3xl mx-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
