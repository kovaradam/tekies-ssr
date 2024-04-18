import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "@remix-run/react";

import stylesheet from "./tailwind.css?url";
import { LinksFunction } from "@remix-run/node";
import { Footer } from "shared/src/components/footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { state } = useNavigation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <h2>
            <NavLink to="/">Home</NavLink>
          </h2>
          <NavLink to="/new">New post</NavLink>
        </header>
        <main className={state === "loading" ? "animate-pulse opacity-60" : ""}>
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
