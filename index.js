//require de[endency
const express = require("express");
const mongoose = require("mongoose");

//create an express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//listen to port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/test_jest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create a schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

const BookModel = mongoose.model("Book", bookSchema);

app.post("/api/books", async (req, res) => {
  // Create a new book
  const bookData = req.body;
  const book = new BookModel(bookData);
  await book.save();
  res.status(201).json(book);
});

app.get("/api/books", async (req, res) => {
  // Get all books
  const books = await BookModel.find({});
  res.json(books);
});

module.exports = app;
