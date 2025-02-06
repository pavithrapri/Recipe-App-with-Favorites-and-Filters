import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, filter }) => {
  return (
    <div className="recipes-container">
      {recipes
        .filter((recipe) => (filter ? recipe.dietLabels.includes(filter) : true))
        .map((recipe) => (
          <RecipeCard key={recipe.uri} recipe={recipe} />
        ))}
    </div>
  );
};

export default RecipeList;
