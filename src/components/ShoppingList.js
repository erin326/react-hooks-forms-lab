import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [search, setSearch] = useState("");

  const [dropDownMenu, setDropDownMenu] = useState("Produce")
  
  const [input, setInput] = useState('');

  const [submittedData, setSubmittedData] = useState([]);

  function handleSearch (newSearch) {
    setSearch(newSearch);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

 function handleSubmitCategoryChange(event) {
    setDropDownMenu(event.target.value);
  }

  function handleSubmit(event) {
    
    event.preventDefault();
    
    const formData = {
      id: uuidv4(),
      name: input,
      category: dropDownMenu
    };
    const dataArray = [...submittedData, formData];
  

    setSubmittedData(dataArray);
    // setInput("");
    
  }

  const itemsToDisplay =
  
  items.filter((item) => {
    if (selectedCategory === "All") return true;
   
   else { 
     return item.category === selectedCategory;
   }

  })
  .filter(item => {
    
    return item.name.includes(search) || item.category.includes(search)
  } )
 


  return (
    <div className="ShoppingList">
      <ItemForm dropDownMenu={dropDownMenu} onItemFormSubmit={handleSubmit} onItemFormChange={handleInputChange} onSubmitCategoryChange={handleSubmitCategoryChange}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} {submittedData.map(data => {
          return (
            <Item key={data.id} name={data.name} category={data.category} />
          )
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
