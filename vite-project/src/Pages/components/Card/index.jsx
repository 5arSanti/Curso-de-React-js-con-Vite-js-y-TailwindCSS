import React from "react"
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from "../../../Context";
import "./TodoLoading.css";

const Card = (data) => {
    const context = React.useContext(ShoppingCartContext);
    //Carrito de Compras
    const addProductsCart = (event, productData) => {
        event.stopPropagation();    

        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, productData])
        context.showAddedMessage();
    }

    //Detalle del producto
    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductShow(productDetail)
    }


    //Render Icon
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;

        if(isInCart){
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
                >
                    <CheckIcon className="w-6 g-6 text-white"></CheckIcon>
                </div>
            );
        }
        else{
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                onClick={(event) => {addProductsCart(event, data.data)}}>
                    <PlusIcon className="w-6 g-6 text-black"></PlusIcon>
                </div>
            );
        }
    }



    return (
        <div className="container bg-white cursor-pointer w-56 h-65"
        onClick={() => showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-3/4">
                <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data?.data?.category?.name}
                </span>
                <img className="w-full h-full object-cover rounded-lg" src={data?.data?.images[0]} alt="Image"/>
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between items-center">
                <span className="text-sm font-light">
                    {data?.data?.title}
                </span>
                <span className="text-lg font-bold">
                    ${data?.data.price}
                </span>
            </p>
        </div>
    );
}

export {Card};