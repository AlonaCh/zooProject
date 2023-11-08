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
    const newArray1 = birdsList.filter((bird) => bird.name !== name);
    setAnimals(newArray);
    setBirds(newArray1);
  }

  function likesCounter(name){

    const newArray3 = animalsList.filter((animal)=> 
    if (animal.name === name) {
      return ;
    }
  }

  return (
    <>
      <Header name='ZOO' />
      <main className='container'>

        <div className='cards'>
          {animalsList.map((animal) => (
            <Card key={animal.name} {...animal} onclick={() =>
              closeHandler(animal.name)} countLikes={()=>likesCounter(animal.name, 'add')}/>))} {/*onclick is an atribute */}

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
/* if it was add add those, if it was .. remove it. App.js
animalsliat.map((animal)=>(
<Card.key={animal.name}
{...animal}
onRemove={()=> removeHandler(animal.name)}
addLikes={()=> likesHandler(animal.name, 'add')}
removeLikes={()=> likesHsndler(animal.name, 'remove')} />
))} */