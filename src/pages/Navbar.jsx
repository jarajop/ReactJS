import React from 'react'
import  "../assets/style/navbar.css"
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div><nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => {
                            return isActive ? "active-link" : "";
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink> {/* Navlink a la difference de browserRouter c'est pour faire un menu et rediriger les routes sans a taper sur l'URL a chaque fois*/}
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar