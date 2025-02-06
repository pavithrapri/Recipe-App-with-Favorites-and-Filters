import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/actions";

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipes.favorites);

  return (
    <div className="recipe-card">
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <p>{recipe.source}</p>
      <button onClick={() => dispatch(toggleFavorite(recipe))}>
        {favorites.some((fav) => fav.uri === recipe.uri) ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};

export default RecipeCard;
