import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Header({ cleanSearch }) {

    const { pathname } = useLocation();  // takes away header on home
    if (pathname === "/")
        return null;

    return (
        <header>

            <nav>
                <div className='navLinkGroup'>
                    <p><NavLink className="header" to="/">Zoo React App</NavLink></p>
                    <ul className='liContainer'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/animals" onClick={cleanSearch}>Animals</NavLink></li>
                        <li><NavLink to="/birds" onClick={cleanSearch}>Birds</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </nav>

        </header>
    );
};



