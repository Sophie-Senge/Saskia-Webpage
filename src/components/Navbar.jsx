import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const links = [
        {
            id: 1,
            link: '/about',
            name: 'About'

        },
        {
            id: 2,
            link: '/art',
            name: 'Art'

        },
        {
            id: 3,
            link: '/plate-shop',
            name: 'Plate Shop'

        },
        {
            id: 4,
            link: '/contact',
            name: 'Contact'

        },

    ]
    return (
        <nav className="nav flex justify-between text-white items-center px-4 fixed w-full h-20 bg-slate-600">
            <div >
               <h1 className="text-5xl px-4 uppercase font-headings hover:text-gray-200">
               <NavLink to="/">saskia spender</NavLink>
                </h1>
            </div>
            <ul className="hidden lg:flex capitalize font-headings">
                {links.map(({id, link, name}) => (
                    <li key={id} className="px-4 py-4 hover:scale-105 duration-200 hover:text-gray-200">
                    <NavLink to={link}>{name}</NavLink>
                </li>

                ))}



                
               
            </ul>

        </nav>
    );
}

export default Navbar;