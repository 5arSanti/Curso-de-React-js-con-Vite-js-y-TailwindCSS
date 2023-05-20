//React
import {useRoutes, BrowserRouter} from "react-router-dom"

//Paginas
import { Home } from '../components/Home'
import { MyAccount } from '../components/MyAccount'
import { MyOrder } from '../components/MyOrder'
import { MyOrders } from '../components/MyOrders'
import { NotFound } from '../components/NotFound'
import { SignIn } from '../components/SignIn'

//CSS
import './App.css'


const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Home/> },
        { path: "/my-account", element: <MyAccount/> },
        { path: "/my-order", element: <MyOrder/> },
        { path: "/my-orders", element: <MyOrders/> },
        { path: "/sign-in", element: <SignIn/> },
        { path: "/*", element: <NotFound/> },
    ]);
    return routes;
}

const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}

export default App;
