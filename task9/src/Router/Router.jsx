import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Posts from "../Pages/Posts";
import Post from "../Pages/Post";
import TasksManage from "../Pages/TasksManage";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/posts",
        element: <Posts />
    },
    {
        path: "/posts/:id",
        element: <Post />
    },
    {
        path: "/taskManage",
        element: <TasksManage/>
    },
]

const Router = createBrowserRouter([...routes]);
export default Router;