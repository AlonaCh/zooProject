export default function Card(props) {
    return (
        <div className="card">
            <img src="https://source.unsplash.com/random/" alt="dog" />
            <h1>Title</h1>
            <button>close</button>
            <button>-</button>
            <span className="material-symbols-outlined">mood</span>
            <button>+</button>
        </div>
    );
};