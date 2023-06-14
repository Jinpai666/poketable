import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Link,
    RouterProvider,
    Outlet,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SingleGenerationPage from "./pages/SingleGenerationPage";
import Breadcrumbs from "./components/Breadcrumbs";

const Root = () => {
    return (
        <>
            <div>
                <Breadcrumbs/>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index element={<Home/>}/>
            <Route path={":generation/:pokemon?"} element={<SingleGenerationPage/>}/>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
