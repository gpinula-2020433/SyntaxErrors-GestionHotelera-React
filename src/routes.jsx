import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { Login } from "./components/Login/Login";
import {Register} from "./components/Register/Register"
import {AuthPage} from "./pages/Auth/AuthPage"
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";


export const routes = [
    {
        path: '/',
        element: <Navigate to="/auth" />
    },
    {
        path: '/auth', 
        element: <AuthPage />,
        children: [
            {
                path: '',
                element: <Navigate to="login"/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',   
                element: <Register/>
            }
        ]
    },
    {
        path:'/main',
        element: <Home />,
    },
    {
        path:'/dashboard',
        element: <DashboardPage/>
    },
    {
        path:'*',
        element: <NotFoundPage/>
    }
]