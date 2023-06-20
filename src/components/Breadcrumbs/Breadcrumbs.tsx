import {useParams, Link} from "react-router-dom";
import "./breadcrumbs.scss";

function Breadcrumbs() {
    const {pokemon, generation} =
        useParams<{ generation?: string; pokemon?: string }>();

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
            {pokemon && (
                <Link className="breadcrumbs__link" to={`${generation}/${pokemon}`}>
                    /{pokemon}
                </Link>
            )}
        </div>
    );
}

export default Breadcrumbs;
