import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Search from '../components/Search.jsx';

export default function CategoryPage(props) {
    const params = useParams();
    console.log(params);
    console.log(props);
    let category = params.category; // props[params.category];
    console.log(props[category]); // because key(params.category) is in a variable

    return (
        <>
            <h1>{category.toUpperCase()}</h1>
            <Search {...props} />

            <div className='cards'>
                {props[category]
                    .filter((element) =>
                        element.name
                            .toLowerCase()
                            .includes(props.search.toLowerCase()))
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
