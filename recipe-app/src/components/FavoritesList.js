import React from "react";
import RecipeCard from "./RecipeCard";

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <div className="favorites-container">
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.uri} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
