import React from "react";


function ItemForm({ onItemFormSubmit, onItemFormChange, onSubmitCategoryChange, dropDownMenu, input }) {
  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input value={input} onChange={onItemFormChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select value={dropDownMenu} onChange={onSubmitCategoryChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button  type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
