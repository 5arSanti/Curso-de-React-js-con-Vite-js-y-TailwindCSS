import React from "react";
import PropTypes from 'prop-types'

export const ShoppingCartContext = React.createContext();

const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    //Estados
    const [count, setCount] = React.useState(0);

    return (
        <ShoppingCartContext.Provider 
            value={{
                count,
                setCount,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export {ShoppingCartProvider};