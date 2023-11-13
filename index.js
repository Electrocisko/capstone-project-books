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
    return res.render("index.ejs",{books});
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error in get index",
    });
  }
});

app.get('/book/:id', async (req,res) => {
  const bookid = req.params.id;
  let queryText = `SELECT *
  FROM book
  WHERE id = ${bookid};`
  const data = await db.query(queryText);
  const book = data.rows[0];

return res.render('book.ejs', {book})
})

app.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`);
});
