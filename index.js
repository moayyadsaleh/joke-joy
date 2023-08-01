// Import required modules
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// Create an Express app
const app = express();
const port = 3000;

// Set up middleware
app.use(express.static("public")); // Serve static files from the "public" directory
app.use(bodyParser.urlencoded({ extended: true })); // Parse incoming URL-encoded data
app.set("view engine", "ejs"); // Set the view engine to EJS for rendering templates

// API URL for fetching jokes from JokeAPI
const API_URL = "https://v2.jokeapi.dev/joke/Any";

// Handle GET request on the root route ("/")


// Handle POST request on the root route ("/")
app.post("/", async (req, res) => {
    try {
      // Extract the selected category from the request body
      const { type } = req.body;
  
      // Update the API URL to include the selected category
      const API_URL = `https://v2.jokeapi.dev/joke/${type}`;
      // Fetch a joke from the JokeAPI based on the selected category
      const response = await axios.get(API_URL);
      const joke = response.data;
  
      // Render the "index.ejs" template with the newly fetched joke data
      res.render("index.ejs", {
        data: joke, // Sending the fetched joke data to the template
      });
    } catch (error) {
      // If an error occurs during the fetch, render the "index.ejs" template with an error message
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: "Sorry, No joke now. Please try again later.",
      });
    }
  });
  
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});