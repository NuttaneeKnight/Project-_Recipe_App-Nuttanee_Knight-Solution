import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  //use stae for the existing recipes
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  //useState recipes and use spread operator to push data in
  const addRecipe = (data) => {
    setRecipes([...recipes, data])
  }
  //add the deleteRecipe() to all the existing recipe rows from the targetIndex that i just map out
  function deleteRecipe(targetIndex) {
    setRecipes(recipes.filter((recipe, index) => index !== targetIndex))
  }
  // create props on RecipeList to delete, and RecipeCreate to add
  return (
    <div className="App">
    <header><h1>Delicious Food Recipes</h1></header>
    <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
    <RecipeCreate addRecipe = {addRecipe}/>
  </div>
  );
}

export default App;
