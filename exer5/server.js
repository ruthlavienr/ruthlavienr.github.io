import express from 'express';

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({extend:false}));

// app.get('/add-book', function(req, res) {
//     res.send({
//       'book_name': req.query.book_name,
//       'isbn': req.query.isbn,
//       'author': req.query.author,
//       'year_published' : req.query.year_published
//     });
// });


app.post('/add-book', (req, res) => {
    res.send(req.query.book_name + ', ' + req.query.isbn + ', ' + req.query.author + ', ' + req.query.year_published);
    res.json({success:true});

    const fs = require('fs');
 
    fs.appendFileSync("books.txt",
    req.query.book_name + ', ' + req.query.isbn + ', ' + req.query.author + ', ' + req.query.year_published);
 
// Get the file contents after the append operation
console.log("\nFile Contents of file after append:",
       fs.readFileSync("example_file.txt", "utf8"));

  });

app.listen(3000, () => { console.log('Server started at port 3000')} );


// app.get('/find-by-isbn-author', (req,res) => { 
// console.log(req);
// res.send(req.query.book_name + ', ' + req.query.isbn + ', ' + req.query.author + ', ' + req.query.year_published);
// //pano mag dalawang parameter
// }); //were going to send back using the sent object