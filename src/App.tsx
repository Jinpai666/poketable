import {createBrowserRouter, createRoutesFromElements, Route, Link, RouterProvider, Outlet  } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home";
import TypesPage from "./pages/TypesPage";
import SinglePokemonPage from "./pages/SinglePokemonPage";
import SingleTypePage from "./pages/SingleTypePage";

const Root = () => {
    return (
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/types">Typ</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index element={<Home/>}/>
            <Route path="/:pokemonType" element={<SingleTypePage/>}/>
            <Route path={":pokemonType/:pokemon"} element={<SinglePokemonPage/>}/>

        </Route>
    )
)


function App() {

    return (
      <RouterProvider router={router} />
    )
}



export default App
