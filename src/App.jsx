import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import Root from "./routes/Root";
import { animals, birds } from "./index.js";
import Home from "./routes/Home";
import About from "./routes/About";
import ErrorPage from './routes/ErrorPage';
import CategoryPage from "./routes/CategoryPage";
import SinglePage from "./routes/SinglePage";


function App() {
  const [zooList, setZooList] = useState({ animals: animals, birds: birds }); //animalsArray and birdsArray are properties of the zooList state
  const [search, setSearch] = useState("");

  function searchHandler(event) {
    setSearch(event.target.value.toLowerCase());
  }

  function closeHandler(name, category) {
    // we need to know wich name we click
    console.log(name);
    const newArray = zooList[category].filter((element) => element.name !== name); // newArray is everything but not that name
    setZooList({ ...zooList, [category]: newArray });

  }

  function likesCounter(name, action, category) {
    const newArray = zooList[category].map((element) => {
      if (element.name === name) {
        if (action === "add") {
          return { ...element, likes: element.likes + 1 };
        }
        if (action === "remove") {
          return { ...element, likes: element.likes - 1 };
        }
      } else {
        return element;
      }
    });
    setZooList({ ...zooList, [category]: newArray });
  };

  function cleanSearch() {
    setSearch('');
  }

  const router = createBrowserRouter([{
    path: '/', element: <Root cleanSearch={cleanSearch} />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },

      {
        path: ":category", element: (<CategoryPage
          {...zooList}
          search={search}
          closeHandler={closeHandler}
          likesCounter={likesCounter}
          searchHandler={searchHandler}
        />)
      },
      { path: ":category/:name", element: <SinglePage {...zooList} /> },//:name=param

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
