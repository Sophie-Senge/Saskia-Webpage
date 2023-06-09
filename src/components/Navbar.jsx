import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

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
        <nav className="nav flex justify-around text-black items-center px-4 z-10 fixed w-full h-24 bg-white">
            <div >
                <h1 className="text-4xl tracking-widest font-bold px-4 uppercase font-headings hover:text-gray-200">
                    <NavLink to="/">saskia spender</NavLink>
                </h1>
            </div>
            <ul className="hidden lg:flex uppercase tracking-widest font-semibold text-sm font-headings">
                {links.map(({ id, link, name }) => (
                    <li key={id} className="px-4 py-4 hover:scale-105 duration-200 hover:text-gray-200">
                        <NavLink to={link}>{name}</NavLink>
                    </li>

                ))}
            </ul>

            <div
                onClick={handleClick}
                className='cursor-pointer text-black z-10 lg:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

            </div>
            {nav && (
                <ul className="uppercase tracking-wide flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black text-sm font-headings">
                    {links.map(({ id, link, name }) => (
                        <li key={id} className="px-4 py-4 hover:scale-105 duration-200 hover:text-gray-200">
                            <NavLink onClick={handleClick} to={link}>{name}</NavLink>
                        </li>

                    ))}
                </ul>

            )}

        </nav>
    );
}

export default Navbar;