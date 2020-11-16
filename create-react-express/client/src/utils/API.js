import axios from "axios";

const APP_ID = "48a1943a";
const APP_KEY = "4d91ea04b25be1b008370b4b06638440";
const url = 'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}';

export default {
  // Gets all books
  getallFood: function() {
    return axios.get("/https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}/");
  },
  // Gets the book with the given id
  getoneFood: function(food) {
    return axios.get("/https://api.edamam.com/search?q="+food+"&app_id=${APP_ID}&app_key=${APP_KEY}/");
  },
  
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
