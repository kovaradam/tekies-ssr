import "../styles.css";

import type { ReactNode } from "react";

import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  const data = await getData();

  return (
    <div className="font-['Nunito'] min-h-screen flex flex-col">
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <Header />

      <main className="m-6 flex-1">{children}</main>
      <Footer />
    </div>
  );
}

const getData = async () => {
  const data = {
    description: "An internet website!",
    icon: "/images/favicon.png",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  };
};
