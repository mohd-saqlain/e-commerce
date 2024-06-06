import Home from "../page/Home";
import Admin from "../page/admin";

export const routes = [
    {
        path:'/',
        element:<Home/>

    },
    {
        path:'/admin',
        element:<Admin/>
    }
]