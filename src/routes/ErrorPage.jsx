import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <div id="errorPage">
                <p>Page not found</p>
                <p>{error.statusText || error.message}</p>
            </div>
        </>
    )
}