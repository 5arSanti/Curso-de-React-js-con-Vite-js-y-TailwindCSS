//React
import {useRoutes, BrowserRouter} from "react-router-dom";

import { ShoppingCartProvider } from "../../Context" ;

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
    let routes = useRoutes([
        { path: "/", element: <Home/> },
        { path: "/my-account", element: <MyAccount/> },
        { path: "/my-order", element: <MyOrder/> },
        { path: "/my-orders", element: <MyOrders/> },
        { path: "/my-orders/last", element: <MyOrder/> },
        { path: "/sign-in", element: <SignIn/> },
        { path: "/*", element: <NotFound/> },
    ]);
    return routes;
}

const App = () => {
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
