import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "prismjs/themes/prism-tomorrow.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chris Wills Flannery",
  description: "Created with Love and Attention",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black" suppressHydrationWarning style={{ backgroundColor: 'black'}}>
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
          <div className="min-h-screen grid grid-rows-[auto_1fr]">
            {children}
          </div>
      </body>
    </html>
  );
}
