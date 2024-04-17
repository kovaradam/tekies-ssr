import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";

export function render() {
  console.log(arguments);

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  return { html };
}
