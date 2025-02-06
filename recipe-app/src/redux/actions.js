export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const fetchRecipes = (query) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=20`
    );
    const data = await response.json();
    dispatch({ type: FETCH_RECIPES_SUCCESS, payload: data.hits.map((hit) => hit.recipe) });
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

export const toggleFavorite = (recipe) => ({
  type: TOGGLE_FAVORITE,
  payload: recipe,
});
