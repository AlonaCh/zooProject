import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div containerLink>
                <div className="animalLink">
                    <Link to="/animals">Animals</Link>
                </div>
                <div className="birdLink">
                    <Link to="/birds">Birds</Link>
                </div>
            </div>
        </>
    );
}