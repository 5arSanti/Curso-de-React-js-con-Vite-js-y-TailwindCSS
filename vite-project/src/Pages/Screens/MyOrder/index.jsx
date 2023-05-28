import React from "react";
import { ShoppingCartContext } from "../../../Context";
import { OrderCard } from "../../components/OrderCard";
import "./styles.css"
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function MyOrder() {
    const context = React.useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

    if( index === "last") index = context.order?.length -1;

    return(
        <>
            <div className="myOrderCardTitle h-50 flex justify-center p-3 relative items-center">
                <Link to="/my-orders" className="absolute left-2">
                    <ChevronLeftIcon className="h-6 g-6 text-black"></ChevronLeftIcon>
                </Link>
                <p className="text-lg font-bold ">Last Order</p>
            </div>
            <div className="myOrderCardContainer items-center mt-2 scrollable-cards">
                {
                    context.order?.[index]?.products.map((product) => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </>
    )
}

export {MyOrder};