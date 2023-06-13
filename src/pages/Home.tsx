import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>Main page
            <Link to={"/water"}>Type</Link>
        </div>
    );
}

export default Home;