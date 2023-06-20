import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Link,
    RouterProvider,
    Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import SingleGenerationPage from "./pages/SingleGenerationPage/SingleGenerationPage";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

const Root = () => {
    return (
        <div className="container">
            <div>
                <Breadcrumbs/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index element={<Home/>}/>
            <Route path={":generation/:chosenPokemon?"} element={<SingleGenerationPage/>}/>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
