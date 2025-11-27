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




//----------- Croud de Livros ----------

app.get('/books', (req, res) => {
  res.json(books); // Retorna a lista de livros
});

app.get('/book/:id', (req, res) => {
  let id = Number(req.params.id); // Converte o ID para número
  let book = books.find(b => b.id === id); // Procura o livro pelo ID
  if (!book) 
    return res.status(404).jsano({message: 'Book not found!'}); // Verifica se o livro existe
  res.json(book); // Retorna o livro encontrado
});

//----------- criar novo livro ----------

app.post ('/books', (req, res) => {

  let { title, author } = req.body; // Extrai título e autor do corpo da requisição

  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required!' }); // Verifica se título e autor foram fornecidos
    let newBook = {
      id: nextBookId++, // Atribui um novo ID
      title,
      author
    };
    books.push(newBook); // Adiciona o novo livro à lista 
      res.status(201).json(newBook); // Retorna mensagem de sucesso e o livro criado
  }
  });

  app.delete('/book/:id', (req, res) => {

    let id = Number(req.params.id); // Converte o ID para número
    let book = books.filter(b => b.id !== id); // Filtra o livro pelo ID
    if (!book) {
      return res.status(404).json({ message: 'Book not found!' }); // Verifica se o livro existe
    
    books = books.filter(b => b.id != id); // Atualiza a lista de livros
    res.status(200).json({ message: 'Book deleted successfully!' }); // Retorna mensagem de sucesso
    }


    // ---------- Start server ----------

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});