import { useParams } from "react-router-dom";
import Card from '../components/Card';
import Search from '../components/Search';

export default function CategoryPage(props) {
    let params = useParams();
    console.log(params);
    let category = params.category;

    return (
        <>
            <h1>{category}</h1>
            <Search searchHandler={props.searchHandler} />
            <div className='cards'>
                {props[category].filter((element) =>
                    element.name.toLowerCase().includes(props.search.toLowerCase()))
                    .map((element) => (
                        <Card key={element.name}
                            {...element} // pass all the object
                            onClick={() =>
                                props.closeHandler(element.name, category)}
                            addLikes={() => props.likesCounter(element.name, 'add', category)} //addLikes is a trigger
                            removeLikes={() => props.likesCounter(element.name, 'remove', category)}
                        />))}
            </div>
        </>
    )
};
