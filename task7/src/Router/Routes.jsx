import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Careers from "../Pages/Careers";
import NotFound from "../Pages/NotFound";


const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/career", element: <Careers /> },
    { path: "*", element: <NotFound/> }
]
const router = createBrowserRouter([...routes]);

export default router;