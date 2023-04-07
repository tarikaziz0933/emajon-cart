import { createBrowserRouter } from "react-router-dom";
import { productsAndCartLoader } from "../../loaders/productsAndCartLoader";
import About from "../About/About";
import Home from "../Home/Home";
import Main from "../layout/Main";
import Orders from "../Orders/Orders";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('products.json'),
                element: <Home></Home>
            },
            {
                path: '/orders',
                loader: productsAndCartLoader,
                element: <Orders></Orders>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default router;