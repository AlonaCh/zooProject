import { useState } from 'react';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import { animals, birds } from './index'


function App() {
  const [animalsList, setAnimals] = useState(animals);// (animals.concat(birds))
  const [birdsList, setBirds] = useState(birds);

  function closeHandler(name) {
    console.log(name);
    const newArray = animalsList.filter((animal) => animal.name !== name);
    setAnimals(newArray);
  }

  function closeHandler(name) {
    console.log(name);
    const newArray = birdsList.filter((bird) => bird.name !== name);
    setBirds(newArray);
  }

  return (
    <>
      <Header name='ZOO' />
      <main className='container'>

        <div className='cards'>
          {animalsList.map((animal) => (
            <Card key={animal.name} {...animal} onclick={() =>
              closeHandler(animal.name)} />))} {/*onclick is an atribute */}

          {birdsList.map((bird) => (
            <Card key={bird.name} {...bird} onclick={() =>
              closeHandler(bird.name)} />))}

        </div>
      </main>
      <Footer copyright='Alona Chubenko' />
    </>
  );
}

export default App
