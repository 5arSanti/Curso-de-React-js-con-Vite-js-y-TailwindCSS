import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"
import "./styles.css"
import { ShoppingCartContext } from "../../../Context";



const CartMenu = () => {
    const context = React.useContext(ShoppingCartContext);

    return (
        <aside 
            className={`${context.isCartMenuOpen ? "flex" : "hidden"} cartMenu p-3 flex-col bg-white fixed right-0 top-0 border-l border-black`}>
            <div className="flex justify-between items-center py-1 px-3 border-b border-gray mx-1">
                <h2 className="font-medium text-xl">My Order</h2>
                <div className="cursor-pointer" onClick={() => {context.toggleCartMenu()}}>
                    <XMarkIcon className="h-6 g-6 text-black"></XMarkIcon>
                </div>
            </div>
            


        </aside>
    );
}

export { CartMenu };