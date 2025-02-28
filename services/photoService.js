const axios = require("../lib/axios.js");
const db = require('../models');

const searchImages = async (query) => {
    try{
      // Make API call to Unsplash
      const response = await axios.get("/search/photos", {
        params: {query},
      });
      
      // Extracting necessary data from the API response
      const photos = response.data.results.map((photo) => ({
      imageUrl: photo.urls.full,
      description: photo.description,
      altDescription: photo.alt_description,
      }));

      return photos;
    } catch(error){
      console.error("Error fetching images from unsplash: ", error.message);
      throw new Error("Failed to fetch images from Unsplash API.");
    }
};

const saveImage = async (photoData) => {
  const photo = await db.Photo.create(photoData);
  return photo;
};

const addTagsToPhoto = async (photoId, newTags) => {
  const photo = await db.Photo.findByPk(photoId);

  if(!photo){
    throw new Error("Photo not found.");
  }

  const currentTags = photo.tags || [];

  // validate total tag count
  if(currentTags.length + newTags.length > 5){
     throw new Error("Each photo can have a maximum of 5 tags.");
  }

  const updatedTags = [...currentTags, ...newTags];

  photo.tags = updatedTags;
  await photo.save();

  return photo;
}

module.exports = { searchImages, saveImage, addTagsToPhoto };