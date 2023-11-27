import { useParams } from "react-router-dom";
import Card from '../components/Card';

export default function Category(props) {
    let params = useParams();
    console.log(params);
    let category = params.category;

    return (
        <>
            <input type="text" onChange={searchHandler} />
            <h1>{category}</h1>

            <div className='cards'>
                {props[category]
                    .filter((element) =>
                        element.name.toLowerCase().includes(search.toLowerCase()))
                    .map((element) => (
                        <Card key={element.name}
                            {...element} // pass all the object
                            onclick={() =>
                                props.closeHandler(element.name, category)}
                            addLikes={() => props.likesCounter(element.name, 'add', category)} //addLikes is a trigger
                            removeLikes={() => props.likesCounter(element.name, 'remove', category)}
                        />))}
            </div>
        </>
    )
};
