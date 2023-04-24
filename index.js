const express = require('express');

const app = express();
const PORT = 1010;

// Dummy books data
const books = [
  { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', pageCount: 224, country: 'United States' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', pageCount: 281, country: 'United States' },
  { id: 3, title: '1984', author: 'George Orwell', pageCount: 328, country: 'United Kingdom' },
  { id: 4, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', pageCount: 417, country: 'Colombia' },
  { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pageCount: 180, country: 'United States' },
];

// Endpoint to get list of dummy books
app.get('/books', (req, res) => {
  res.json(books);
});

// Endpoint to get a book by ID
app.get('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id === Number(id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});