import React from "react";
import { Link } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/24/solid"

import { AllOrdersCard } from "../../components/AllOrdersCard";
import { ShoppingCartContext } from "../../../Context";
import "./styles.css"

function MyOrders() {
    const context = React.useContext(ShoppingCartContext);

    return(
        <>
            <div className="myOrderCardTitle h-50 flex justify-center p-3 relative items-center">
                <Link to="/" className="absolute left-2">
                    <ChevronLeftIcon className="h-6 g-6 text-black"></ChevronLeftIcon>
                </Link>
                <p className="text-lg font-bold ">My Orders</p>
            </div>
            <div className="allMyOrdersCardContainer items-center mt-5">
                {
                    context.order.map((order, index) => (
                        <Link key={index} to={`/my-orders/${index}`}>
                            <AllOrdersCard 
                                totalPrice={order.totalPrice}
                                totalProducts={order.totalProducts}
                                date={order.date}
                            />
                        </Link>

                    ))
                }
            </div>


        </>
    )
}

export {MyOrders};