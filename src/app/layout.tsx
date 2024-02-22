import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "../../public/goldlogoonly.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NOI 24",
  description: "National Olympiad in Informatics 24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={logo.src} />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
