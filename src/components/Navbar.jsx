import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav flex flex-row justify-items-center fixed top-0 z-10 w-full h-20 bg-slate-600">
      <ul className="flex-row">
        <li className="">
          <NavLink to="/">Saskia Spender</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/art">Art</NavLink>
        </li>
        <li>
          <NavLink to="/plate-shop">Plate Shop</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;