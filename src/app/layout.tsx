import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar/Navbar";
import { Roboto } from 'next/font/google'
import "../styles/globals.css";
const roboto = Roboto({
  weight: ['100', '300','400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Movie App",
  description: "A movie app built with Next js and SCSS and the TMDB API style based on youtube because why not!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
