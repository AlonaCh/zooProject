import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <h1>This is Zoo REACT App</h1>
            <nav>
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/animals">Animals</NavLink></li>
                <li><NavLink to="/birds">Birds</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};