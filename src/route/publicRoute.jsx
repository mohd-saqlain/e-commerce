import Home from "../page/Home";
import Admin from "../page/admin";

export const publicRoutes = [
    {
        path:'/',
        element:<Home/>

    }
]

export const authRoutes = [
    {
        path:'/admin',
        element:<Admin/>
    }
]