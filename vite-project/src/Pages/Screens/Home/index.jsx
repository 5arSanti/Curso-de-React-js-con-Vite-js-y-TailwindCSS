// import { useState, useEffect } from "react"
import React from "react"
import {Card} from "../../components/Card"
import { ProductDetail } from "../../components/ProductDetail"

import {TodoLoading} from "../../components/ChargeComponents/TodoLoading"
import {TodoError} from "../../components/ChargeComponents/TodoError"

function Home() {
    const [items, setItems] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    

    React.useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch("https://api.escuelajs.co/api/v1/products");
                const data = await response.json();
                setItems(data);
                await setTimeout(() =>{
                    setLoading(false);
                }, 1000) 

            }
            catch (err){
                alert(err)
                setError(true)
                setLoading(false);
            }
        }
        fetchData()
    }, [])

    return(
        <>
            {error && <TodoError/>}

            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {loading && (
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
                {
                    !loading && items?.map(item => (
                        <Card
                            data={item}
                            key={item.id}
                        />
                    ))
                }
            </div>
            <ProductDetail/>
        </>
    )
}

export {Home};