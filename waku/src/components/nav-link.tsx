"use client";
import { ComponentProps } from "react";
import { Link, useRouter_UNSTABLE as useRouter } from "waku";

export const NavLink = (
  props: Omit<ComponentProps<typeof Link>, "className"> & {
    className?: ((isActive: boolean) => string) | string;
  }
) => {
  const { path } = useRouter().value;

  const className = (() => {
    if (typeof props.className === "function") {
      return props.className(path.includes(props.to));
    }
    return props.className;
  })();

  return <Link {...props} className={className} />;
};
