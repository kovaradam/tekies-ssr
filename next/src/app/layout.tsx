import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Footer } from "shared";

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
      <body className="min-h-screen flex flex-col">
        <header className="">
          <h2 className="">
            <Link href="/">Home</Link>
          </h2>
          <Link
            href="/new"
            // className={(isActive) => (isActive ? "underline" : "")}
          >
            New post
          </Link>
        </header>
        <main className="m-6 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}