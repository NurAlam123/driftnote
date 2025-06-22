import type { Metadata } from "next";
import "./globals.css";
import { playwrite, PTSerif, roboto } from "./fonts";

export const metadata: Metadata = {
  title: "DriftNote",
  description: "Share your thoughts freely and anonymously.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${PTSerif.variable} ${playwrite.variable} font-roboto antialiased`}
      >
        <main className="max-w-screen-md mx-auto">{children}</main>
      </body>
    </html>
  );
}
