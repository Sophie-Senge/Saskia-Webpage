import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav flex justify-between items-center px-4 fixed w-full h-20 bg-slate-600">
            <div>
                <ul className="flex font-headings">
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
            </div>
        </nav>
    );
}

export default Navbar;