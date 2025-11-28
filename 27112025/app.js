const express = require('express');
const app = express();

app.use(express.json());

// ---------- In-memory data ----------

let books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt, David Thomas' }
];

let reviews = [
  { id: 1, bookId: 1, reviewer: 'Alice', rating: 5, comment: 'Must-read!' },
  { id: 2, bookId: 1, reviewer: 'Bob', rating: 4, comment: 'Very useful.' },
  { id: 3, bookId: 2, reviewer: 'Charlie', rating: 5, comment: 'Loved it.' }
];

let nextBookId = 3;
let nextReviewId = 4

// --------------------- CRUD Books --------------------------

app.get('/books', (req, res) => {
  res.json(books)
})

app.get('/book/:id', (req, res) => {

  let id = Number(req.params.id)

  let book = books.find(b => b.id == id)

  if (!book)
    return res.status(404).json( {message : 'Book not found'} )

  res.json(book)

})

app.post('/books', (req, res) => {

  let {title , author} = req.body

  if (!title || !author) 
    return res.status(400).json( {message: 'Title and author are required'})

  let newBook = {
    id: nextBookId++,
    title,
    author
  }

  books.push(newBook)

  res.status(201).json(newBook);

})

app.delete('/books/:id', (req, res) => {

  let id = Number(req.params.id)

  let book = books.find(b => b.id == id)

  if (!book) 
    return res.status(404).json({ message : 'Book not found'})

  books = books.filter(b => b.id != id)

  res.status(204).send()

})

app.put('/book/:id', (req, res) => {

  let id = Number(req.params.id)

  let book = books.find(b => b.id == id)

  if (!book) 
    return res.status(404).json( {message : 'Book not found'})

  let {title, author} = req.body

  if (!title && !author)
    return res.status(400).json( {message: 'One of the fields must have information'})

  if (title)
    book.title = title;

  if (author)
    book.author = author;

  res.json(book)

})

// ---------------- CRUD REVIEWS ---------------------------

app.get('/book/:bookId/reviews', (req, res) => {

  let id = Number(req.params.bookId)

  let book = books.find(b => b.id == id)

  if(!book)
    return res.status(404).json( { message: 'Book not found'})

  res.json(reviews.filter(r => r.bookId == id))

})

app.post('/book/:bookId/reviews', (req, res) => {

  let id = Number(req.params.bookId)

  let book = books.find(b => b.id == id)

  if(!book)
    return res.status(404).json( { message: 'Book not found'})

  let {reviewer, rating, comment} = req.body

  if (!reviewer || !rating || !comment) 
    return res.status(400).json( { message : 'Missing fields'})

  let newReview = {
    id: nextReviewId++,
    bookId: id,
    reviewer,
    rating,
    comment
  }

  reviews.push(newReview)

  res.status(201).json(newReview)

})

// ---------- Start server ----------

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});

