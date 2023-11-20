import { useState } from "react";

function clickAddHeandler() {
  const [likes, setLikes] = useState("");
}

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

      <h1>{name}</h1>
      <div className="cardText">
        <button className="close" onClick={onclick}><span></span>
          &times;
        </button>
       
        <p className="hearts" onClick={removeLikes}>
          <span className="material-symbols-outlined">heart_minus</span>
        </p>
        <p className="like">{likes}</p>
        <span className={likes < 0 ? "red-like material-symbols-outlined" : "black-like material-symbols-outlined"}>volunteer_activism</span>
        <button onClick={addLikes}>
          <span className="hearts material-symbols-outlined">heart_plus</span>
        </button>
    
      </div>
    </div>
  );
}