import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  // map out the my recipes  <td>has data <th>has header
  const rows = recipes.map(({ name, cuisine, photo, ingredients, preparation }, index) => (
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td> <img src = {photo}/></td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td className="content_td"><p>{preparation}</p></td>
      <td> <button name="delete" onClick={() => deleteRecipe(index)} >Delete</button> </td>
    </tr>
  ));
  //name the header with <th> for it's own row like the example
  //{rows} will go inside the body
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         { rows }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
