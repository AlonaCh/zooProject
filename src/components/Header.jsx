import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Header() {

    const { pathname } = useLocation();
    if (pathname === "/")
        return null;

    return (
        <header className="header">

            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/animals">Animals</NavLink></li>
                    <li><NavLink to="/birds">Birds</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
            <h1>This is Zoo REACT App</h1>
        </header>
    );
};