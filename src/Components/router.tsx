import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChatSection from "./ChatSection/ChatSection";
export const router = createBrowserRouter([
{
    path:"/",
    element:<App/>,
    children:[
        {
            path:"/:mobileNo",
            element:<ChatSection/>
        }

    ]
}


])