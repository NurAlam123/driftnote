import type { Metadata } from "next";
import "./globals.css";
import { playwrite, PTSerif, roboto } from "@/fonts";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "DriftNote",
    template: "%s | DriftNote",
  },
  description: "Share your thoughts freely and anonymously.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${PTSerif.variable} ${playwrite.variable} font-roboto antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-3xl mx-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
