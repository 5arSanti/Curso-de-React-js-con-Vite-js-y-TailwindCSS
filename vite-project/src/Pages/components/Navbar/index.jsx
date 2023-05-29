import { NavLink } from "react-router-dom";
import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from "../../../Context";

const Navbar = () => {
    const context = React.useContext(ShoppingCartContext);
    const activeStyle = "underline underline-offset-4"

    //Account
    const account = localStorage.getItem("account");
    const parsedAccount = JSON.parse(account);
    //Has an Account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true;
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

    //Sign Out
    const signOut = localStorage.getItem("sign.out");
    const parsedSignOut = JSON.parse(signOut);
    const isUserSignOut = context.signOut || parsedSignOut;

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true);
        localStorage.setItem("sign-out", stringifiedSignOut);
        context.setSignOut(true);
    }

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut){
            return(
                <>
                    <li className="text-black/60">
                        {parsedAccount?.name}
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
                        }
                        onClick={() => handleSignOut()}>
                            Sign Out 
                        </NavLink>
                    </li>
                    <li className="flex gap-2 items-center cursor-pointer"
                        onClick={() => {context.toggleCartMenu()}}>
                            <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon> {context.cartProducts.length}
                    </li>
                </>
            );
        }
        else{
            return (
                <>
                <li>
                    <NavLink to='/sign-in'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => handleSignOut()}>
                        Sign Up
                    </NavLink>
                </li>
                <li className="flex gap-2 items-center cursor-pointer"
                    onClick={() => {context.toggleCartMenu()}}>
                    <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon> {context.cartProducts.length}
                </li>                    
                </>
            );
        }
    }


    return (
        <nav className="border-b-2 bg-white flex justify-between items-center fixed z-10 w-full py-4 px-8 text-sm font-light top-0">
            {/* Lado Izquierdo */}
            <ul className="flex items-center gap-4">
                <li className="font-semibold text-lg">
                    <NavLink to={`${isUserSignOut ?  "/sign-in" : "/"}`}
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
                {renderView()}
            </ul>
        </nav>
    );
}

export {Navbar};