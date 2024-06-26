import type { Metadata } from "next";
import "./globals.css";
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
      <body>
        <header>
          <h2>
            <NavLink href="/">Home</NavLink>
          </h2>
          <NavLink href="/new">New post</NavLink>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
