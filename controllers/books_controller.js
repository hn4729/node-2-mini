let books = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).send(books);
  },

  create: (req, res) => {
    books.push({ id: id, title: req.body.title, author: req.body.author });
    id++;
    res.status(200).send(books);
  },

  update: (req, res) => {
    let bookIndex = books.findIndex(book => book.id == req.params.id);
    let book = books[bookIndex];
    books[bookIndex] = {
      id: book.id,
      title: req.body.title || book.title,
      author: req.body.author || book.author
    };
    res.status(200).send(books);
  },

  delete: (req, res) => {
    let bookIndex = books.findIndex(book => book.id == req.params.id);
    books.splice(bookIndex, 1);
    res.status(200).send(books);
  }
};
