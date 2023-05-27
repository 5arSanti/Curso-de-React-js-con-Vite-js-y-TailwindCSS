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
        setIsProductDetailOpen(false)
    }

    const [addMessage, setAddMessage] = React.useState(false);
    const showAddedMessage = () => {
        setAddMessage(true)
        setTimeout(() =>{
            setAddMessage(false)
        }, 1500)
    }


    //Añadir producots al carrito 
    const addProductsCart = (event, productData) => {
        event.stopPropagation();    

        setCount(count + 1);
        setCartProducts([...cartProducts, productData])
        showAddedMessage();
    }

    //Eliminar elementos del Carrito
    const handleDelete = (event, id) => {
        event.stopPropagation();
        const filteredProducts = cartProducts.filter(product => product.id != id);
        setCartProducts(filteredProducts);
        setCount(count - 1);
    }


    //Shopping Cart => Ordenes que se hacen desde el carrito
    const [order, setOrder] = React.useState([]);


    
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
                addProductsCart,
                handleDelete,
                order,
                setOrder,


                addMessage,
                setAddMessage,
                showAddedMessage,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export {ShoppingCartProvider};