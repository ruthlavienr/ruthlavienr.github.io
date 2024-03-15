/*
Author: Ruth Djusthine E. Tenifrancia
Class: UV-3L
Description: This script sends a POST request to add a book to a server.
*/

import needle from 'needle';

needle.post(  //sends a POST request to add a book
    'http://localhost:3000/add-book', //endpoint url
    
    //the book
    { 
      book_name: "Harry Potter and the Philosopher's Stone",
      isbn: "978-0-7475-3269-9",
      author: "J.K Rowling",
      year_published: "1997"
  }, 
  { json: true }, //options indicating JSON format for the request
    (err, res) => { //if there's an error
     if (err){
      console.error('Error making request: ', err);
      return;
     } 

     console.log('Response Body: ', res.body); //response body
    }
  );