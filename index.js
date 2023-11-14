import express from "express";
import config from "./config.js";
import db from "./database/postgre.js";

const PORT = config.app.PORT;

db.connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM book");
    const books = data.rows;
    return res.render("index.ejs", { books, sort:"Sort by id" });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error in get index",
    });
  }
});

app.get("/sortbyrating", async (req, res) => {
  try {
    const queryText = `SELECT * FROM book
  ORDER BY rating DESC;`;
    const data = await db.query(queryText);
    const books = data.rows;
    return res.render("index.ejs", { books, sort:"Sort by rating" });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error in sort by rating",
    });
  }
});

app.get("/sortbytitle", async(req, res) => {
  try {
    const queryText = `SELECT * FROM book
  ORDER BY title;`;
    const data = await db.query(queryText);
    const books = data.rows;
    return res.render("index.ejs", { books,sort:"Sort by title" });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error in sort by rating",
    });
  }
});

app.get("/sortbyyear", async (req, res) => {
  try {
    const queryText = `SELECT * FROM book
  ORDER BY year DESC;`;
    const data = await db.query(queryText);
    const books = data.rows;
    return res.render("index.ejs", { books, sort:"Sort by year" });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error in sort by rating",
    });
  }
});

app.get("/book/:id", async (req, res) => {
  const bookid = req.params.id;
  let queryText = `SELECT *
FROM book
INNER JOIN author ON book.authorid = author.id
WHERE book.id= ${bookid};`;
  const data = await db.query(queryText);
  const book = data.rows[0];
  return res.render("book.ejs", { book });
});

app.get("/form", (req, res) => {
  res.render("form.ejs");
});

app.post("/form", async (req, res) => {
  try {
    const data = req.body;
    const queryText = `
  INSERT INTO book (title,authorid,rating,review,cover,category,openid,year)
  VALUES
  ('${data.title}',${data.authorID},${data.rating},'${data.review}',
   'https://covers.openlibrary.org/b/olid/${data.openid}-M.jpg','${data.category}','${data.openid}','${data.year}');`;
    await db.query(queryText);
    return res.redirect("/");
  } catch (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`);
});
