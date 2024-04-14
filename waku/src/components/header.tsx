"use client";
import { NavLink } from "./nav-link.js";

export const Header = () => {
  return (
    <header className="flex items-center sticky top-0 gap-4 p-6 w-full border-b-2">
      <h2 className="text-lg font-bold tracking-tight">
        <NavLink to="/">Home</NavLink>
      </h2>
      <NavLink
        to="/new"
        className={(isActive) => (isActive ? "underline" : "")}
      >
        New post
      </NavLink>
    </header>
  );
};
