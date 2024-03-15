import needle from 'needle';


// needle.get('http://localhost:3000/greeting?name=Koy', (err, res) => {
//     console.log(res.body);   // prints the body of the response message. In this case, “Hello”
//  //   console.log(res.statusCode);
//  //HelloKoy
// });

needle.post(    
    'http://localhost:3000/add-book',
    {book_name: "Harry Potter and the Philosopher's Stone",
  isbn: "978-0-7475-3269-9",
  author: "J.K Rowling",
  year_published: "1997"
},
    (err, res) => {
      console.log(res.body)   // prints the server’s response “Received a POST request.”
    }
  );