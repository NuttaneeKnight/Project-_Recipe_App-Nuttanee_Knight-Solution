import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  // empty form when it is reset
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  //use state hook to keep the from data and start with the blank form
  const [formData, setFormData] = useState({...initialFormState})

  //update the form data without manipulating the data has to target the e with obj value
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value //bc it's an obj not an array
    })
  }

  //click event on submit the new formData has to reset to blank form when click
  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState })
  }

  // tbody is everything below the header
  // tr hold each form
  // td hold each input
  // input attribute ={ handleChange }
  // text area for ingredients and preparation
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={ handleChange }
                value={ formData.name }
                required
               />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={ handleChange }
                value={ formData.cuisine }
                required
               />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                onChange={ handleChange }
                value={ formData.photo }
                required
               />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={ handleChange }
                value={ formData.ingredients }
                required
               />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                onChange={ handleChange }
                value={ formData.preparation }
                required
               />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
