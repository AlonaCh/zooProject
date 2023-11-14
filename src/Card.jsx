import {useState} from 'react';

function clickAddHeandler() {
    const [likes, setLikes] = useState('');
}



export default function Card({ name, likes, removeLikes, addLikes, onclick }) {
    return (
        <div className="card">
            
            <img src={`https://source.unsplash.com/400x400/?${name}`} alt={name} />
            
            <h1>{name}</h1>
            <div className="cardText">
            <button className="close" onClick={onclick}>&times;</button>
            <button className="hearts" onClick={removeLikes}><span class="material-symbols-outlined" >heart_minus</span></button>
           <span>{likes}</span>
            <span class="material-symbols-outlined">volunteer_activism</span>
            <button className="hearts" onClick={addLikes}><span class="material-symbols-outlined">
heart_plus
</span></button>
</div>
        </div >
    );
};

