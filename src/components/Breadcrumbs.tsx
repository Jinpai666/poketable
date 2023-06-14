import {useParams, Link} from "react-router-dom";

function Breadcrumbs() {
    const {pokemon, generation} =
        useParams<{ generation?: string; pokemon?: string }>();

    return (
        <div style={{display: "flex"}}>
            <Link to="/">home</Link>
            {generation && <Link to={`${generation}`}>/generation-{generation}</Link>}
            {pokemon && <Link to={`${generation}/${pokemon}`}>/{pokemon}</Link>}
        </div>
    );
}

export default Breadcrumbs;
