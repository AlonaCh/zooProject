import { useLocation } from 'react-router-dom';

export default function Footer() {
    const { pathname } = useLocation();
    if (pathname === "/")
        return null;

    return (
        <div className='footer'>
            <p>Copyright Alona Chubenko</p>
        </div>
    );
};

