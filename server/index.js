const express = require("express");
const PORT = 3000;
const bc = require("../controllers/books_controller");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../build"));

app.get("/api/books", bc.read);
app.post("/api/books", bc.create);
app.put("/api/books/:id", bc.update);
app.delete("/api/books/:id", bc.delete);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
