import { FETCH_RECIPES_SUCCESS, TOGGLE_FAVORITE } from "./actions";

const initialState = {
  recipes: [],
  favorites: [],
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_SUCCESS:
      return { ...state, recipes: action.payload };
    case TOGGLE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.some((fav) => fav.uri === action.payload.uri)
          ? state.favorites.filter((fav) => fav.uri !== action.payload.uri)
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};
