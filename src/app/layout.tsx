import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./fonts";

export const metadata: Metadata = {
  title: "Anolog",
  description: "A plain and clean anonymous blog website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto antialiased`}>
        <main className="max-w-screen-xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
