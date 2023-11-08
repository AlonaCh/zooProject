export default function Card({ name, likes, onclick }) {
    return (
        <div className="card">
            <img src={`https://source.unsplash.com/400x400/?${name}`} alt={name} />
            <h1>{name}</h1>
            <button className="close" onClick={onclick}>&times;</button>
            <button>-</button>
            <span className="material-symbols-outlined">mood</span>
            <button>+{likes}</button>
        </div >
    );
};
