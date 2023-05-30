import React from "react";
import PropTypes from 'prop-types'

export const ShoppingCartContext = React.createContext();

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem("account");
    const signoutInLocalStorage = localStorage.getItem("sign-out");
    let parsedAccount;
    let parsedSignOut;

    if (!accountInLocalStorage){
        localStorage.setItem("account", JSON.stringify({}))
        parsedAccount = {};
    }
    else {
        parsedAccount = JSON.parse(accountInLocalStorage);
    }

    if (!signoutInLocalStorage){
        localStorage.setItem("sign-out", JSON.stringify({}))
        parsedSignOut = {};
    }
    else {
        parsedSignOut = JSON.parse(signoutInLocalStorage);
    }
}

const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    //Api
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
    }, []);


    //HOME - Estados => Loading, error, y getProducts
    const [items, setItems] = React.useState(null);

    const [filteredItems, setFilteredItems] = React.useState(null);

        //Get Products by title
    const [searchByTitle, setSearchByTitle] = React.useState(null);

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);



    const filteredItemsByTitle = (items, searchByTitle) => {
        return(items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase())));
    }


    //FILTRADO POR CATEGORIAS
    const [searchByCategory, setSearchByCategory] = React.useState(null);
    

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    }

    const resetSearchs = () => {
        setSearchByCategory(null);
        setSearchByTitle(null);
    }


    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === "BY_TITLE"){
            return filteredItemsByTitle(items, searchByTitle);
        }
        if (searchType === "BY_CATEGORY"){
            return filteredItemsByCategory(items, searchByCategory);
        }
        if (searchType === "BY_TITLE_AND_CATEGORY"){
            return filteredItemsByCategory(items, searchByCategory).filter(item => (item.title.toLowerCase().includes(searchByTitle.toLowerCase())));
        }
        if (searchType === null){
            return items;
        }
    }


    React.useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY", items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy("BY_TITLE", items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory]);



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
    }


    //Shopping Cart => Ordenes que se hacen desde el carrito
    const [order, setOrder] = React.useState([]);


    //CERRAR SESION
    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true);
        localStorage.setItem("sign-out", stringifiedSignOut);
        setSignOut(true);
    }

    //INICIALIZAR VARIABLES EN LOCALSTORAGE
    const [account, setAccount] = React.useState({});
    const [signOut, setSignOut] = React.useState(false);
    
    return (
        <ShoppingCartContext.Provider 
            value={{
                items,
                setItems,
                loading,
                setLoading,
                error,
                setError,
                
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                setFilteredItems,
                searchByCategory,
                setSearchByCategory,
                filteredItemsByCategory,
                filterBy,

                resetSearchs,

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

                //Account - SignOut
                account,
                setAccount,
                signOut,
                setSignOut,
                handleSignOut,


                addMessage,
                setAddMessage,
                showAddedMessage,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export {ShoppingCartProvider};