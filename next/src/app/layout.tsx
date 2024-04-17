import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Footer } from "shared";
import { NavLink } from "@/components/nav-link";

export const metadata: Metadata = {
  title: "Next Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="min-h-screen flex flex-col">
        <header className="">
          <h2 className="">
            <NavLink href="/">Home</NavLink>
          </h2>
          <NavLink href="/new">New post</NavLink>
        </header>
        <main className="m-6 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
