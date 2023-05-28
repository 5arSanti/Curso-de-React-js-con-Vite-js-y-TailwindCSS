import { NavLink } from "react-router-dom";
import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from "../../../Context";

const Navbar = () => {
    const context = React.useContext(ShoppingCartContext);

    const activeStyle = "underline underline-offset-4"
    return (
        <nav className="border-b-2 bg-white flex justify-between items-center fixed z-10 w-full py-4 px-8 text-sm font-light top-0">
            {/* Lado Izquierdo */}
            <ul className="flex items-center gap-4">
                <li className="font-semibold text-lg">
                    <NavLink to='/'
                    onClick={() => {context.resetSearchs();}}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => {context.resetSearchs();}}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => {context.setSearchByCategory("clothes")}}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => {context.setSearchByCategory("electronics")}}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => {context.setSearchByCategory("furnitures")}}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => {context.setSearchByCategory("toys")}}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => {context.setSearchByCategory("others")}}>
                        Others
                    </NavLink>
                </li>
            </ul>

            

            {/* Lado Derecho */}
            <ul className="flex items-center gap-4">
                <li className="text-black/60">
                    santiari05@hotmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Sign In 
                    </NavLink>
                </li>
                <li className="flex gap-2 items-center cursor-pointer"
                    onClick={() => {context.toggleCartMenu()}}>
                        <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon> {context.cartProducts.length}
                </li>
            </ul>
        </nav>
    );
}

export {Navbar};