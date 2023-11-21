import {Link} from 'react-router-dom';

export default function Home() {
    return(
        <>
        <h1>Home</h1>
        <div>
        <a href="/animals">animals</a>
        <Link to="/animals">Animals</Link>
        </div>
        <div>
            <a href="/birds">birds</a>
            <Link to="/birds">Birds</Link>
        </div>
        </>
    );
}