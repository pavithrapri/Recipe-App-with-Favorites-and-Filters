import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "./redux/actions";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import FavoritesList from "./components/FavoritesList";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { recipes, favorites } = useSelector((state) => state.recipes);
  const [search, setSearch] = useState("pizza");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchRecipes(search));
  }, [dispatch, search]);

  return (
    <div className="app-container">
      <h1>Recipe App</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBar setFilter={setFilter} />
      <FavoritesList favorites={favorites} />
      <RecipeList recipes={recipes} filter={filter} />
    </div>
  );
};

export default App;
