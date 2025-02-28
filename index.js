const express = require("express");
require("dotenv").config();
const { createNewUser } = require("./controllers/userController");
const { searchPhotos, savePhoto, addPhotoTags, searchPhotosByTag } = require("./controllers/photoController");
const { getSearchHistory } = require("./controllers/searchHistoryController");
const { sequelize } = require("./models");

const app = express();
app.use(express.json());

app.post("/api/users", createNewUser);
app.get("/api/photos/search", searchPhotos);
app.post("/api/photos", savePhoto);
app.post("/api/photos/:photoId/tags", addPhotoTags);
app.get('/api/photos/tag/search', searchPhotosByTag);
app.get("/api/search-history", getSearchHistory);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

  app.listen(3000, () => {
    console.log("Server is running on PORT: 3000");
  });