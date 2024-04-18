import React from "react";

export function Title(
  props: React.HTMLProps<HTMLHeadingElement> & { documentTitle?: string }
) {
  return (
    <>
      {props.documentTitle && <title>{`Blog | ${props.documentTitle}`}</title>}
      <h1
        {...{ ...props, documentTitle: undefined }}
        className={"text-4xl font-bold mb-4 ".concat(props.className ?? "")}
      >
        {props.children}
      </h1>
    </>
  );
}
