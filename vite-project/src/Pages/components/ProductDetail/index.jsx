import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"
import "./styles.css"
import { ShoppingCartContext } from "../../../Context";



const ProductDetail = () => {
    const context = React.useContext(ShoppingCartContext);

    return (
        <aside 
            className={`${context.isProductDetailOpen ? "flex" : "hidden"} productDetail p-3 flex-col bg-white fixed right-0 top-0 border-l border-black`}>
            <div className="flex justify-between items-center py-1 px-3 border-b border-gray mx-1">
                <h2 className="font-medium text-xl">Detail</h2>
                <div className="cursor-pointer" onClick={() => {context.openProductDetail()}}>
                    <XMarkIcon className="h-6 g-6 text-black"></XMarkIcon>
                </div>
            </div>
            
            <figure className="relative m-2">
                <div className="w-full h-full rounded-lg bg-slate-800 absolute opacity-50"></div>
                <span className="absolute top-0 right-0 bg-white/75 rounded-lg text-black text-xs m-3 px-3 py-0.5">
                    {context.productShow.category?.name}
                </span>

                <img className="w-full h-full rounded-lg object-cover" 
                src={context.productShow.images[0]} 
                alt={context.productShow.title} />


                <p className="w-90 flex flex-col pl-4 absolute top-0 left-0 mt-10 mx-8 text-white" >
                    <span className="text-xl font-bold mt-3">
                        {context.productShow.title}
                    </span>
                    <span className="text-lg font-bold pb-3">
                        ${context.productShow.price}
                    </span>
                    <span className=" font-light text-sm text-justify pt-3 border-t border-1 border-white/75">
                        {context.productShow.description}
                    </span>



                </p>
            </figure>
        </aside>
    );
}

export { ProductDetail };