import React from "react";
import "./styles.css"
import { ShoppingCartContext } from "../../../../Context";



const AddedMessage = () => {
    const context = React.useContext(ShoppingCartContext);

    return (
        <div 
            className={`${context.addMessage ? "flex" : "hidden"} message text-md bottom-10 justify-center p-1 bg-green-500 fixed text-white font-semibold rounded-lg items-center border-lime-100`}>
            Added to the Cart
        </div>
    );
}

export { AddedMessage };