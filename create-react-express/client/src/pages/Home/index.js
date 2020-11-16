import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./Home.css";
const Home = () => {

    const [food, setfood] = useState([])
    const [formObject, setFormObject] = useState({})
  
    // Load all food and store them with setfood
    useEffect(() => {
    //   loadfood()
    }, [])
  
    // Loads all food and sets them to food
    function loadfood() {
      API.getfood()
        .then(res => 
          setfood(res.data)
        )
        .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };
    
      // When the form is submitted, use the API.saveBook method to save the book data
      // Then reload food from the database
      function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
          API.getoneFood({
            title: formObject.title,
            author: formObject.author,
            synopsis: formObject.synopsis
          })
            .then(res => loadfood())
            .catch(err => console.log(err));
        }
      };

    
    
    
    return (
      <div className="App">     
        <h1>Chef's Menu</h1>
      <form className="search-form">
        <input className="search-bar" type="text" name="food" onChange={handleInputChange}/>
        <button className="search-button" type="submit" onClick={()=>handleFormSubmit}>search</button>
      </form>
      </div>
      );
    };
  
  
  export default Home;