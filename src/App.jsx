import { useState } from "react";
import Root from "./routes/Root";
import { animals, birds } from "./index";
import Home from "./routes/Home";
import Animals from "./routes/Animals";
import Birds from "./routes/Birds";
import About from "./routes/About";
import ErrorPage from './routes/ErrorPage';
import CategoryPage from "./routes/CategoryPage";
import SinglePage from "./routes/SinglePage";

import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

function App() {
  const [zooList, setZooList] = useState({ animalsArray: animals, birdsArray: birds }); //animalsArray and birdsArray are properties of the zooList state
  const [search, setSearch] = useState("");

  function searchHandler(event) {
    setSearch(event.target.value);
  }
  function closeHandler(name) {
    // we need to know wich name we click
    console.log(name);
    const newArray = animalsList.filter((animal) => animal.name !== name); // newArray is everything but not that name
    const newArray1 = birdsList.filter((bird) => bird.name !== name);
    setAnimals(newArray);
    setBirds(newArray1);
  }

  function likesCounter(name, action) {
    const newArray = animalsList.map((animal) => {
      if (animal.name === name) {
        if (action === "add") {
          return { ...animal, likes: animal.likes + 1 };
        }
        if (action === "remove") {
          return { ...animal, likes: animal.likes - 1 };
        }
      } else {
        return animal;
      }
    });

    setBirds(
      birdsList.map((bird) => {
        if (bird.name === name) {
          if (action === "add") {
            return { ...bird, likes: bird.likes + 1 };
          }
          if (action === "remove") {
            return { ...bird, likes: bird.likes - 1 };
          }
        } else {
          return bird;
        }
      })
    );

    setAnimals(newArray);
  }

  function cleanSearch(cleanSearch) {
    setSearch('');
  }



  const router = createBrowserRouter([{
    path: '/', element: <Root cleanSearch={cleanSearch} />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      /*{
        path: "/animals",
        element: (
          <Animals
            searchHandler={searchHandler}
            closeHandler={closeHandler}
            likesCounter={likesCounter}
            search={search}
            animalsList={animalsList}
          />
        ),
      },
      {
        path: "/birds",
        element: (
          <Birds
            searchHandler={searchHandler}
            closeHandler={closeHandler}
            likesCounter={likesCounter}
            search={search}
            birdsList={birdsList}
          />
        ),
      }, */
      { path: "/category/:name", element: <SinglePage {...zoo} /> },
      { path: "/about", element: <About /> },
    ],
  },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// organisms === 'animals'? setAnimals : setBirds;

// function checkOrganisms(organisms){
//return 'animals' ? animalsList : birdsList;
//}
