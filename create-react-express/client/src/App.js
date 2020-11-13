import React, { Component } from "react";
import "./App.css";

const App = () => {

  const APP_ID = "48a1943a";
  const APP_KEY = "4d91ea04b25be1b008370b4b06638440";

  const Request = 'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}'
  return (
    
    <div className="App">
      
      <h1>Chef's Menu</h1>
    <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit">search</button>
    </form>
    </div>
    );
  };


export default App;