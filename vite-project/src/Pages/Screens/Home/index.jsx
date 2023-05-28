import React from "react"
import {Card} from "../../components/Card"
import { ProductDetail } from "../../components/ProductDetail"

import {TodoLoading} from "../../components/ChargeComponents/TodoLoading"
import {TodoError} from "../../components/ChargeComponents/TodoError"
import { ShoppingCartContext } from "../../../Context"

import "./styles.css"

function Home() {
    const context = React.useContext(ShoppingCartContext);

    const renderView = () => {
        if (context.filteredItems?.length > 0){
            return (
                !context.loading && context.filteredItems?.map(item => (
                    <Card
                        data={item}
                        key={item.id}
                    />
                ))
            )
        }
        else{
            return (<TodoError/>)
        }
    }

    return(
        <>
            <div className="homeTitle h-50 flex justify-center p-3 relative items-center max-w-screen-lg w-full">
                <p className="text-lg font-bold ">Exclusive Products </p>
            </div>
            <input className="inputHome border border-green-500 rounded-lg focus:outline-none my-3" 
                type="text" 
                placeholder="Search a Product" 
                onChange={(event) => {context.setSearchByTitle(event.target.value)}}/>

            {context.error && <TodoError/>}

            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg place-items-center">
                {context.loading && (
                <>
                    <TodoLoading/>
                    <TodoLoading/>
                    <TodoLoading/>
                    <TodoLoading/>
                    <TodoLoading/>
                    <TodoLoading/>
                    <TodoLoading/>
                    <TodoLoading/>
                </>
                )}
                {renderView()}
            </div>
            <ProductDetail/>
        </>
    )
}

export {Home};