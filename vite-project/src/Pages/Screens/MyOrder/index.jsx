import React from "react";
import { ShoppingCartContext } from "../../../Context";
import { OrderCard } from "../../components/OrderCard";
import "./styles.css"

function MyOrder() {
    const context = React.useContext(ShoppingCartContext);
    console.log(context.order?.slice(-1)[0]);

    return(
        <>
            <div className="myOrderCardTitle h-50 justify-center flex p-3">
                <p className="text-lg font-bold ">Last Order</p>
            </div>
            <div className="myOrderCardContainer items-center mt-2">
                {
                    context.order?.slice(-1)[0].products.map((product) => (
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