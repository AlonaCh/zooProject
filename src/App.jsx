import { useState } from 'react';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import { animals, birds } from './index'


function App() {
  const [animalsList, setAnimals] = useState(animals);// (animals.concat(birds))
  const [birdsList, setBirds] = useState(birds); // setBirds is a method, useState = hook, birdsList ia a state
  const [search, setSearch] = useState('');

  function closeHandler(name) {
    console.log(name);
    const newArray = animalsList.filter((animal) => animal.name !== name);
    const newArray1 = birdsList.filter((bird) => bird.name !== name);
    setAnimals(newArray);
    setBirds(newArray1);
  }

  function likesCounter(name, action){
  setAnimals(
  animalsList.map((animal)=> {
    if (animal.name === name) {
      if (action === 'add') {
        return {...animal, likes: animal.likes + 1};
      } if (action === 'remove') {
        return {...animal, likes: animal.likes - 1};
    }
  } else {
    return animal; 
  }})
);
}
  function searchHandler(event){
    setSearch(event.target.value);
  };

  return (
    <>
      <Header name='ZOO' />
      <input type="text" onChange={searchHandler}/>
      <main className='container'>

        <div className='cards'>
          {animalsList
          .filter(animal =>
            animal.name.toLowerCase().includes(search.toLowerCase()))
          .map((animal) => (
            <Card key={animal.name} {...animal} onclick={() =>
              closeHandler(animal.name)} 
              addLikes={()=>likesCounter(animal.name, 'add')}
              removeLikes={()=>likesCounter(animal.name,'remove')}
              />))}
              {/*onclick is an atribute */}

          {birdsList
          .filter(bird => bird.name.toLowerCase().includes(search.toLowerCase()) )
          .map((bird) => (
            <Card key={bird.name} {...bird} onclick={() =>
              closeHandler(bird.name)} 
              addLikes={()=>likesCounter(bird.name, 'add')}
              removeLikes={()=>likesCounter(bird.name,'remove')}/>))}

        </div>
      </main>
      <Footer copyright='Alona Chubenko' />
    </>
  );
}

export default App
/* if it was add add those, if it was .. remove it. App.js
animalslist.map((animal)=>(
<Card.key={animal.name}
{...animal}
onRemove={()=> removeHandler(animal.name)}
addLikes={()=> likesHandler(animal.name, 'add')}
removeLikes={()=> likesHandler(animal.name, 'remove')} />
))} */