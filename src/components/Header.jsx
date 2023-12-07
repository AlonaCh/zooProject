import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Header({ cleanSearch }) {

    /*const { pathname } = useLocation();
    if (pathname === "/")
        return null;*/

    return (
        <header>
            <h1><NavLink className="header" to="/">Zoo REACT App</NavLink></h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/animals" onClick={cleanSearch}>Animals</NavLink></li>
                    <li><NavLink to="/birds" onClick={cleanSearch}>Birds</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>

        </header>
    );
};