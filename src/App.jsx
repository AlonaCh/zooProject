import { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Root from './routes/Root';
import { animals, birds } from './index';
import Home from './routes/Home';
import Animals from './routes/Animals';
import Birds from './routes/Birds';
import About from './routes/About'


function App() {
  const [animalsList, setAnimals] = useState(animals);// (animals.concat(birds))
  const [birdsList, setBirds] = useState(birds); // setBirds is a method, useState = hook, birdsList ia a state
  const [search, setSearch] = useState('');

  function closeHandler(name) { // we need to know wich name we click
    console.log(name);
    const newArray = animalsList.filter((animal) => animal.name !== name);// newArray is everything but not that name
    const newArray1 = birdsList.filter((bird) => bird.name !== name);
    setAnimals(newArray);
    setBirds(newArray1);
  }

  function likesCounter(name, action){
  /*setAnimals(
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
);*/
const newArray = animalsList.map((animal)=> {
  if (animal.name === name) {
    if (action === 'add') {
      return {...animal, likes: animal.likes + 1};
    } if (action === 'remove') {
      return {...animal, likes: animal.likes - 1};
  }
} else {
  return animal; 
}})
setBirds(
  birdsList.map((bird)=> {
    if (bird.name === name) {
      if (action === 'add') {
        return {...bird, likes: bird.likes + 1};
      } if (action === 'remove') {
        return {...bird, likes: bird.likes - 1};
    }
  } else {
    return bird; 
  }})
);
setAnimals(newArray);
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
          .filter((animal) =>
            animal.name.toLowerCase().includes(search.toLowerCase()))
          .map((animal) => (
            <Card key={animal.name} 
            {...animal} // pass all the object
             onclick={() =>
              closeHandler(animal.name)} 
              addLikes={()=>likesCounter(animal.name, 'add')} //addLikes is a trigger
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
