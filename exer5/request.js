//Ruth Djusthine E. Tenifrancia
//UV-3L

import needle from 'needle';

needle.post(    
    'http://localhost:3000/add-book',
    {
      book_name: "Harry Potter and the Philosopher's Stone",
      isbn: "978-0-7475-3269-9",
      author: "J.K Rowling",
      year_published: "1997"
  }, 
  { json: true },
    (err, res) => {
     if (err){
      console.error('Error making request: ', err);
      return;
     } 

     console.log('Response Body: ', res.body);
    }
  );