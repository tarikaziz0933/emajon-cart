import { createBrowserRouter } from "react-router-dom";
import { productsAndCartLoader } from "../../loaders/productsAndCartLoader";
import About from "../About/About";
import CustomerList from "../Dashboard/Dashboard/CustomerList";
import DashboardOrder from "../DashboardOrder/DashboardOrder";
import Home from "../Home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Login from "../Login/Login";
import Orders from "../Orders/Orders";
import SignUp from "../SignUp/SignUp";

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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <CustomerList></CustomerList>

            },
            {
                path: '/dashboard/orderlist',
                element: <DashboardOrder></DashboardOrder>

            }
        ]
    }
])

export default router;