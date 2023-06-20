import {useParams, Link} from "react-router-dom";
import "./breadcrumbs.scss";

function Breadcrumbs() {
    const {chosenPokemon, generation} =
        useParams<{ generation?: string; chosenPokemon?: string }>();

    return (
        <div className="breadcrumbs">
            <Link className="breadcrumbs__link" to="/">
                Home
            </Link>
            {generation && (
                <Link className="breadcrumbs__link" to={`${generation}`}>
                    /generation-{generation}
                </Link>
            )}
            {chosenPokemon && (
                <Link className="breadcrumbs__link" to={`${generation}/${chosenPokemon}`}>
                    /{chosenPokemon}
                </Link>
            )}
        </div>
    );
}

export default Breadcrumbs;
