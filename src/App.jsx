// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Register />, 
    },
    {
        path: "/about",
        element: <Single />
    },
    {
        path: "/contact",
        element: <Settings />
    },
    {
        path: "/write",
        element: <Write />
    },
    {
        path: "/logout",
        element: <Login />
    }
]);


function App() {

    return (
       
        <RouterProvider router={router} />

    );
}

export default App;
