import React from "react";
import { ShoppingCartContext } from "../../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

const NavBarShoppingCart = () => {
    const context = React.useContext(ShoppingCartContext);


    return (
        <div className="flex relative items-center cursor-pointer"
        onClick={() => {context.toggleCartMenu()}}>
            <ShoppingBagIcon className="h-6 w-6 fill-none stroke-black"></ShoppingBagIcon> 
            <div className="absolute bottom-3.5 left-3.5 bg-black rounded-full w-4 h-4 text-white flex justify-center items-center text-xs ">
                {context.cartProducts.length}
            </div>
        </div>
    );
}

export {NavBarShoppingCart};