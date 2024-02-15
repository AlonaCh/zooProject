import { useParams, useNavigate } from "react-router-dom";

export default function SinglePage(props) {
    let params = useParams();
    console.log(params);
    const navigate = useNavigate();

    let elementArray = props[params.category]
    console.log(elementArray);

    let data = elementArray.find((element) => element.name == params.name);
    console.log('data', data)

    return (
            <div className="singlePage">
                <img className="singleImage" src={`https://source.unsplash.com/400x400/?${data.name}`} alt={data.name} />
                <div className="singleText">
                    <h2>{data.name.toUpperCase()}</h2>
                    <div className="singleLikes">
                        <p className="like">Likes: {data.likes}</p>
                        <span className={data.likes < 0 ? "red-like material-symbols-outlined" : "black-like material-symbols-outlined"}>volunteer_activism</span>
                    </div>
                    <button className="return" onClick={() => navigate(-1)}>Return</button>
                </div>
            </div>
    )
}

