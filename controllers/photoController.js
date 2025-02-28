const { searchImages, saveImage, addTagsToPhoto } = require("../services/photoService");
const { validateQueryParameter, validateUnsplashKey, validateImageUrl, validateTags, validateTagsArray, validateSortOrder, validateTagSearch } = require("../validations/photoValidation");
const db = require("../models");
const photo = require("../models/photo");

const searchPhotos = async (req, res) => {
  try{
    const { query } = req.query;
    
    validateUnsplashKey();
    validateQueryParameter(query);

    const photos = await searchImages(query);

    if(photos.length === 0){
       return res.status(404).json({ message: "No images found for the given query." }); 
    }
    
    res.status(200).json({ photos });
  } catch(error){
    res.status(400).json({ error: error.message });
  }
};

const savePhoto = async (req, res) => {
  try{
    const { imageUrl, description, altDescription, tags, userId } = req.body;

    // Validate the inputs
    validateImageUrl(imageUrl);
    validateTags(tags);

    // saving the photo
    const savedPhoto = await saveImage({ imageUrl, description, altDescription, tags, userId });

    res.status(201).json({
      message: "Photo saved successfully.",
      photo: savedPhoto,
    });

  } catch(error){
    res.status(400).json({ error: error.message });
  }
};

const addPhotoTags = async (req, res) => {
  try{
    const { photoId } = req.params;
    const { tags } = req.body;
    
    validateTagsArray(tags);
     
    // adding tags to the photo using the service
    const updatedPhoto = await addTagsToPhoto(photoId, tags);
    
    res.status(200).json({
      message: "Tags added successfully.",
      photo: updatedPhoto,
    });
  } catch(error){
    res.status(400).json({ error: error.message }); 
  }
};

const searchPhotosByTag = async (req, res) => {
  try {
    const { tags, sort = 'ASC', userId } = req.query;

    // Validate input
    validateTagSearch(tags);
    validateSortOrder(sort);

    // Check if the tag exists in the database
    const photosWithTag = await db.Photo.findAll({
      where: db.Sequelize.where(
        db.Sequelize.literal(`EXISTS (SELECT 1 FROM json_each(Photo.tags) WHERE json_each.value = '${tags}')`),
        true
      ),
      order: [['createdAt', sort.toUpperCase()]],
    });

    if (photosWithTag.length === 0) {
      return res.status(404).json({ message: 'No photos found for the given tag.' });
    }

    // Log search history if userId is provided
    if (userId) {
      await db.SearchHistory.create({
        userId,
        query: tags,
      });
    }

    // Format response
    const photos = photosWithTag.map(photo => ({
      imageUrl: photo.imageUrl,
      description: photo.description,
      dateSaved: photo.createdAt,
      tags: photo.tags,
    }));

    res.status(200).json({ photos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { searchPhotos, savePhoto, addPhotoTags, searchPhotosByTag };