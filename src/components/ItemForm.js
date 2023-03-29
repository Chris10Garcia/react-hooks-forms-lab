import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [formData, setFormData]  = useState (
    { 
      name : "", 
      category: "Produce"
  })



  function handleChange(event){
    const id = uuid()
    const name = event.target.name
    const value = event.target.value

    setFormData({...formData, [name] : value, id : id})
  }

  function onItemFormSubmit(event){
    event.preventDefault()
    

    console.log(formData)
  }

  return (
    <form 
        className="NewItem"
        onSubmit={onItemFormSubmit}
    >
      <label>
        Name:
        <input type="text" name="name" onChange = {handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange = {handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
