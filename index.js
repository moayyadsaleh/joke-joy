import express from "express";
import axios from "axios";
import bodyParser from"body-parser";
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); 


app.get("/", (req, res) => {
    res.render("index.ejs", { content: "Waiting for data..." });
  });
  




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });