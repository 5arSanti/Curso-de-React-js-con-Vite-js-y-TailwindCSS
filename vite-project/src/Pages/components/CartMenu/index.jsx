import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"
import "./styles.css"
import { ShoppingCartContext } from "../../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../../utils";


const CartMenu = () => {
    const context = React.useContext(ShoppingCartContext);
    console.log("Cart: ", context.cartProducts)


    return (
        <aside 
            className={`${context.isCartMenuOpen ? "flex" : "hidden"} cartMenu p-3 flex-col bg-white fixed right-0 top-0 border-l border-black `}>
                <div className="pb-3">
                    <div className="flex justify-between items-center py-1 px-3 border-b border-gray mx-1">
                        <h2 className="font-medium text-xl">My Order</h2>
                        <div className="cursor-pointer" onClick={() => {context.toggleCartMenu()}}>
                            <XMarkIcon className="h-6 g-6 text-black"></XMarkIcon>
                        </div>
                    </div>
                </div>

                <div className=" h-full scrollable-cards">
                    {
                        context.cartProducts.map((product) => (
                            <OrderCard 
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imageUrl={product.images}
                                price={product.price}
                                handleDelete={context.handleDelete}
                            />
                        ))
                    }
                </div>
            
            <div className="bg-white flex flex-col h-30 py-2 px-3 gap-3">
                <p 
                    className="px-5 flex justify-between items-center w-full h-12 bg-gray-200 rounded-lg">
                    <span className="text-md font-bold">Total</span>
                    <span className="text-lg font-bold">
                        ${totalPrice(context.cartProducts)}
                    </span>
                </p>
                <button className="w-full h-12 bg-black text-white font-semibold rounded-lg">
                    Checkout
                </button>
            </div>


        </aside>
    );
}

export { CartMenu };