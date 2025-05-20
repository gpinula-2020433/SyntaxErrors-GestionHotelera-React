import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { Login } from "./components/Login/Login";
import {Register} from "./components/Register/Register"
import {AuthPage} from "./pages/Auth/AuthPage"

import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import HotelPage from "./pages/Hotel/HotelPage";
import { AdminPage } from "./pages/admin/AdminPage";
import { element } from "prop-types";
import { RoomPage } from "./pages/Room/RoomPage";
import { ServicePage } from "./pages/Services/ServicePage";
import { EventPage } from "./pages/Event/EventPage";
import { ReportPage } from "./pages/Reports/ReportPage";


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
        path:'/admin',
        element: <AdminPage/>,
        children:[
            {path: 'hotel', element:<HotelPage/>},
            {path:'room', element:<RoomPage/>},
            {path:'services', element:<ServicePage/>},
            {path:'event', element:<EventPage/>},
            {path:'report', element:<ReportPage/>},
            
        ]
    },
    {
        path:'*',
        element: <NotFoundPage/>
    }
]