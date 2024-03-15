/*
Author: Ruth Djusthine E. Tenifrancia
Class: UV-3L
Description: This script implements an Express server to manage books, including adding books and searching for books by ISBN or author.
*/

import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//endpoint to add a book
app.post('/add-book', (req, res) => {
  const { book_name, isbn, author, year_published } = req.body;

  console.log('Received book information:', req.body);

  //checks if any required field is missing
  if (!book_name || !isbn || !author || !year_published){
      console.log('Invalid book information');
      return res.json({ success: false });
  } 

  //appends book information to books.txt
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

//endpoint for finding a book by isbn and author
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

    //parses each line to find matching books
    for (let i = 0; i < recordsArray.length; i++) {
      const bookPerLine = recordsArray[i];
      const details = bookPerLine.split(',');
      const book = {
        book_name: details[0],
        isbn: details[1],
        author: details[2],
        year_published: details[3]
      };

      //checks for matching ISBN and author
      if (book.isbn === isbn && book.author === author) {
        foundedBooks.push(book);
      }
    }

    //found books
    if (foundedBooks.length > 0) {
      res.send(
        `${foundedBooks[0].book_name} (${foundedBooks[0].year_published}, Written by ${foundedBooks[0].author}) - ${foundedBooks[0].isbn}`
      );
    } else {
      res.send('No books found matching the search criteria.');
    }
  });
});

//endpoint for finding a book by author
app.get('/find-by-author', (req, res) => {
  const author = req.query.author;

  //reads books.txt
  fs.readFile('books.txt', 'utf8', (err, records) => {
    if (err) {
      console.error('Error reading the file:', err);
      return res.json([]);
    } 

    const foundedBooks = [];
    const recordsArray = records.trim().split('\n');

    //parses each line to find matching author
    for (let i = 0; i < recordsArray.length; i++) {
      const bookPerLine = recordsArray[i];
      const details = bookPerLine.split(',');
      const book = {
        book_name: details[0],
        isbn: details[1],
        author: details[2],
        year_published: details[3]
      };

      //checks for the matching author
      if (book.author === author) {
        foundedBooks.push(book);
      }
    }

    //filtered books
    const filteredBooks = foundedBooks.map(
      (book) =>
        `${book.book_name} (${book.year_published}, Written by ${book.author}) - ${book.isbn}`
    ).join('<br>');

    res.send(filteredBooks); 
  });
});

//starts the server
app.listen(3000, () => { console.log('Server started at port 3000') });
