import React, { useEffect, useState } from "react";

import "./App.css";
import Recepie from "./Recepie";

function App() {
  const APP_ID = "17e31fd4";
  const APP_KEY = "af8672e164078965ae6bbaece854486e";
  const [recepies, setRecepies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Veg Pasta ");

  useEffect(() => {
    getRecepies();
  }, [query]);

  const getRecepies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecepies(data.hits);
    console.log(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="app__Searchform">
        <input
          className="app__searchInput"
          type="text"
          value={search}
          placeholder="Search For Your Faviorate Dish"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="app__searchButton" type="submit">
          Search
        </button>
      </form>
      <div className="app__recepies">
        {recepies.map((recipe) => (
          <Recepie
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
        <h1>By Pulkit Gupta</h1>
      </div>
    </div>
  );
}

export default App;
