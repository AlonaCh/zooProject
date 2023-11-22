import Card from '../components/Card';

export default function Animals({ search,
    closeHandler,
    likesCounter,
    animalsList,
    searchHandler,
}) {
    9
    return (
        <>
            <input type="text" onChange={searchHandler} />
            <h1>Animals</h1>
            <div className='cards'>
                {animalsList
                    .filter((animal) =>
                        animal.name.toLowerCase().includes(search.toLowerCase()))
                    .map((animal) => (
                        <Card key={animal.name}
                            {...animal} // pass all the object
                            onclick={() =>
                                closeHandler(animal.name)}
                            addLikes={() => likesCounter(animal.name, 'add')} //addLikes is a trigger
                            removeLikes={() => likesCounter(animal.name, 'remove')}
                        />))}
            </div>
        </>
    )
};
