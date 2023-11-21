import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {

    const error = useRouteError();

    return (
        <>
            <div>
                <p>Page nnot found</p>
                <p>{error.statusText || error.message}</p>
            </div>
        </>
    )
}