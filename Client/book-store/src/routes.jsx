import {createBrowserRouter} from "react-router-dom"
import CreateBook from "./pages/CreateBook"
import Home from "./pages/Home"
import Showbook from "./pages/Showbook"
import EditBook from "./pages/EditBook"
import DeleteBook from "./pages/DeleteBook"
import NotFound from "./pages/NotFound"

export const createBookroute = "/books/create"
export const showBookroute = "/books/details/:id"
export const editBookRoute = "/books/edit/:id"
export const deleteBookRoute = "/books/delete/:id"

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:createBookroute,
        element:<CreateBook/>
    },
    {
        path:showBookroute,
        element: <Showbook/>
    },
    {
        path:editBookRoute,
        element: <EditBook/>    
    },
    {
        path:deleteBookRoute,
        element: <DeleteBook/>
    },  
    {
        path:"*",
        element:<NotFound/>
    }
])