import React from "react";
import PropTypes from 'prop-types'

export const ShoppingCartContext = React.createContext();

const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    //Contador del Carrito
    const [count, setCount] = React.useState(0);
    
    
    //Toggle Product Detail - OPEN and CLOSE
    const [isProductDetailOpen, setIsProductDetailOpen] = React.useState(false);
    const openProductDetail = () =>{
        setIsProductDetailOpen(!isProductDetailOpen);
        setIsCartMenuOpen(false);
    }

    //Mostrar los detalles del producto
    const [productShow, setProductShow] = React.useState({
        title: "",
        price: "",
        description: "",
        images: [],
    });

    //Productos del Carrito
    const [cartProducts, setCartProducts] = React.useState([])
    const [isCartMenuOpen, setIsCartMenuOpen] = React.useState(false);

    const toggleCartMenu = () =>{
        setIsCartMenuOpen(!isCartMenuOpen);
    }

    const [addMessage, setAddMessage] = React.useState(false);
    const showAddedMessage = () => {
        setAddMessage(true)
        setTimeout(() =>{
            setAddMessage(false)
        }, 1500)
    }

    
    return (
        <ShoppingCartContext.Provider 
            value={{
                count,
                setCount,
                openProductDetail,
                isProductDetailOpen,
                productShow,
                setProductShow,
                cartProducts,
                setCartProducts,
                isCartMenuOpen,
                toggleCartMenu,


                addMessage,
                setAddMessage,
                showAddedMessage,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export {ShoppingCartProvider};