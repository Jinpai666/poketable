import { useParams, Link } from "react-router-dom";

function Breadcrumbs() {
  const { pokemon, pokemonType } =
    useParams<{ pokemonType?: string; pokemon?: string }>();

  return (
    <div style={{ display: "flex" }}>
      <Link to="/">home</Link>
      {pokemonType && <Link to={`${pokemonType}`}>/{pokemonType}</Link>}
      {pokemon && <Link to={`${pokemon}`}>/{pokemon}</Link>}
    </div>
  );
}

export default Breadcrumbs;
