import { useParams, useNavigate } from "react-router-dom";

export default function SinglePage(props) {
    let params = useParams();
    console.log(params);
    const navigate = useNavigate();
    const category = params.category;

    const elementArray = props[params.category]
    console.log(elementArray);

    const data = elementArray.find((element) => element.name === params.name);
    console.log(data);

    return (
        <>
            <div>
                <img src={`https://source.unsplash.com/400x400/?${data.name}`} alt={data.name} />
                <h2>{data.name}</h2>
                <p className="like">Likes: {data.likes}</p>
                <span className={likes < 0 ? "red-like material-symbols-outlined" : "black-like material-symbols-outlined"}>volunteer_activism</span>
                <button className="return" onClick={() => navigate(-1)}>Return</button>
            </div>
        </>
    )
}

