import { Link } from "react-router-dom";

export default function Card({
  name,
  likes,
  removeLikes,
  addLikes,
  onclick,
}) {
  return (
    <div className="card">
      <img src={`https://source.unsplash.com/400x400/?${name}`} alt={name} />

      <h3>{name.toUpperCase()}</h3>
      <div className="cardText">
        <button className="close" onClick={onclick}><span></span>
          &times;
        </button>

        <button onClick={removeLikes}>
          <span className="hearts material-symbols-outlined">heart_minus</span>
        </button>
        <p className="like">{likes}</p>
        <span className={likes < 0 ? "red-like material-symbols-outlined" : "black-like material-symbols-outlined"}>volunteer_activism</span>
        <button onClick={addLikes}>
          <span className="hearts material-symbols-outlined">heart_plus</span>
        </button>

      </div>
      <Link className="more" to={`${name}`}>See more</Link>
    </div>
  );
}
