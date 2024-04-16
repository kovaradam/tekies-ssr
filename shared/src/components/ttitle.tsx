import React from "react";

export function Title(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) {
  return (
    <>
      <title>{props.children}</title>
      <h1
        {...props}
        className={"text-4xl font-bold mb-4 ".concat(props.className ?? "")}
      >
        {props.children}
      </h1>
    </>
  );
}
