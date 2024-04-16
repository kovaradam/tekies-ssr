"use client";
import { NavLink } from "./nav-link.js";

export const Header = () => {
  return (
    <header className="">
      <h2 className="">
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
