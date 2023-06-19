import "./loadingIndicator.scss"

function LoadingIndicator() {


    return (
        <div className="loading">
            <img
                className="loading__spinner"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png" alt="Pokeball" />
            Loading ...
        </div>
    );
}

export default LoadingIndicator;
