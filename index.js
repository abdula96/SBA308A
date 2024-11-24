require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, "public")));

// Home page route
app.get("/", (req, res) => {
  res.render("home", { title: "Puppy Lover's Paradise" });
});

// Gallery page route
app.get("/gallery", (req, res) => {
  res.render("gallery", { title: "Puppy Gallery" });
});

// API route for fetching puppy images
app.get("/api/puppies", async (req, res) => {
  const apiUrl = "https://dog.ceo/api/breeds/image/random/12"; // Correct API URL
  try {
    const response = await axios.get(apiUrl);
    // Log the response to verify it
    console.log("API Response:", response.data);

    if (response.data.message) {
      res.json({ message: response.data.message }); // Return puppy image URLs
    } else {
      res.status(404).json({ error: "No puppies found" });
    }
  } catch (error) {
    console.error("Error fetching puppies from API:", error);
    res.status(500).json({ error: "Failed to fetch puppies" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/test-api", (req, res) => {
  res.send("API is working!");
});
f;
