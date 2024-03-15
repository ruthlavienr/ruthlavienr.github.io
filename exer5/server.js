//Ruth Djusthine E. Tenifrancia
//UV-3L

import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/add-book', (req, res) => {
  const { book_name, isbn, author, year_published } = req.body;

  console.log('Received book information:', req.body);

  if (!book_name || !isbn || !author || !year_published){
      console.log('Invalid book information');
      return res.json({ success: false });
  } 

  fs.appendFileSync('books.txt',
      (book_name + ',' + isbn + ',' + author + ',' + year_published + '\n'),
      (err) => {
          if (err) {
              console.error('Error saving the book: ', err);
              return res.json({ success: false });
          }
          console.log('Book saved successfully');
          return res.json({ success: true });
      }
  );
});


app.get('/find-by-isbn-author', (req, res) => {
  const isbn = req.query.isbn;
  const author = req.query.author;

  fs.readFile('books.txt', 'utf8', (err, records) => {
    if (err) {
      console.error('Error reading the file:', err);
      return res.json([]);
    } 

    const foundedBooks = [];
    const recordsArray = records.trim().split('\n');

    for (let i = 0; i < recordsArray.length; i++) {
      const bookPerLine = recordsArray[i];
      const details = bookPerLine.split(',');
      const book = {
        book_name: details[0],
        isbn: details[1],
        author: details[2],
        year_published: details[3]
      };

      if (book.isbn === isbn && book.author === author) {
        foundedBooks.push(book);
      }
    }

    if (foundedBooks.length > 0) {
      res.send(
        `${foundedBooks[0].book_name} (${foundedBooks[0].year_published}, Written by ${foundedBooks[0].author}) - ${foundedBooks[0].isbn}`
      );
    } else {
      res.send('No books found matching the search criteria.');
    }
  });
});


app.get('/find-by-author', (req, res) => {
  const author = req.query.author;

  fs.readFile('books.txt', 'utf8', (err, records) => {
    if (err) {
      console.error('Error reading the file:', err);
      return res.json([]);
    } 

    const foundedBooks = [];
    const recordsArray = records.trim().split('\n');

    for (let i = 0; i < recordsArray.length; i++) {
      const bookPerLine = recordsArray[i];
      const details = bookPerLine.split(',');
      const book = {
        book_name: details[0],
        isbn: details[1],
        author: details[2],
        year_published: details[3]
      };

      if (book.author === author) {
        foundedBooks.push(book);
      }
    }

    const filteredBooks = foundedBooks.map(
      (book) =>
        `${book.book_name} (${book.year_published}, Written by ${book.author}) - ${book.isbn}`
    ).join('<br>');

    res.send(filteredBooks); 
  });
});

app.listen(3000, () => { console.log('Server started at port 3000') });
