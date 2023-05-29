//React
import React from "react";
import {useRoutes, BrowserRouter, Navigate} from "react-router-dom";

import { ShoppingCartProvider, ShoppingCartContext, initializeLocalStorage } from "../../Context" ;

//Paginas
import { Home } from '../Screens/Home';
import { MyAccount } from '../Screens/MyAccount';
import { MyOrder } from '../Screens/MyOrder';
import { MyOrders } from '../Screens/MyOrders';
import { NotFound } from '../Screens/NotFound';
import { SignIn } from '../Screens/SignIn';

//Componenetes
import {Navbar} from "../components/Navbar";
import { CartMenu } from "../components/CartMenu";
import { AddedMessage } from "../components/CartMenu/AddedCartMessage";

//CSS
import './App.css'


const AppRoutes = () => {
    const context = React.useContext(ShoppingCartContext);

    const account = localStorage.getItem("account");
    const parsedAccount = JSON.parse(account);

    const signOut = localStorage.getItem("sign-out");
    const parsedSignOut = JSON.parse(signOut);

    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
    const noAccountInLocalState =  Object.keys(context.account).length === 0;
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
    const isUserSignOut = context.signOut || parsedSignOut;

    let routes = useRoutes([
        { path: "/", element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={"/sign-in"}/>},
        { path: "/clothes", element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={"/sign-in"}/>},
        { path: "/electronics", element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={"/sign-in"}/>},
        { path: "/furnitures", element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={"/sign-in"}/>},
        { path: "/toys", element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={"/sign-in"}/>},
        { path: "/others", element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={"/sign-in"}/>},

        { path: "/my-account", element: <MyAccount/> },
        { path: "/my-order", element: <MyOrder/> },
        { path: "/my-orders", element: <MyOrders/> },
        { path: "/my-orders/last", element: <MyOrder/> },
        { path: "/my-orders/:id", element: <MyOrder/> },
        { path: "/sign-in", element: <SignIn/> },
        { path: "/*", element: <NotFound/> },
    ]);
    return routes;
}

const App = () => {
    initializeLocalStorage();
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes/>
                <Navbar/>
                <CartMenu/>
                <AddedMessage/>
            </BrowserRouter>
        </ShoppingCartProvider>

    )
}

export default App;
