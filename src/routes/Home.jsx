import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>

            <div>
                <Link to="/animals">Animals</Link>
            </div>
            <div>
                <Link to="/birds">Birds</Link>
            </div>
        </>
    );
}