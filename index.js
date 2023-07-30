import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


const API_URL = "https://v2.jokeapi.dev/joke/Any";

app.get("/", async (req, res) => {
    try {
      const response = await axios.get(AP);
      const result = response.data;
      console.log(result);
      res.render("index.ejs", { data: result });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });

  app.post("/", async (req, res) => {
    try {
      // Fetch a new joke from the API without using the user input
      const response = await axios.get(API_URL);
      const joke = response.data;
  
      // Render the template with the new joke data
      res.render("index.ejs", {
        data: joke, // Sending the fetched joke data to the template
      });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: "Sorry, No joke now. Please try again later.",
      });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});