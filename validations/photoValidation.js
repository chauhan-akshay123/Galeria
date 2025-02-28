const validateQueryParameter = (query) => {
    if(!query){
        throw new Error("A search term (query) is required.");
    }
};

const validateUnsplashKey = () => {
    if(!process.env.UNSPLASH_ACCESS_KEY){
        throw new Error("Unsplash API key is missing in the .env file.");
    }
};

const validateImageUrl = (imageUrl) => {
    if(!imageUrl.startsWith('https://images.unsplash.com/')){
      throw new Error("Invalid image URL"); 
    }
};

const validateTags = (tags) => {
    if(tags.length > 5){
       throw new Error("Cannot provide more than 5 tags"); 
    }
    const invalidTags = tags.filter((tag) => tag.length > 20);
    if(invalidTags.length > 0){
       throw new Error("Each tag must not exceed 20 characters."); 
    }
};

const validateTagsArray = (tags) => {
    if(!Array.isArray(tags)) {
       throw new Error("Tags must be an array."); 
    }

    tags.forEach((tag) => {
      if(typeof tag !== 'string' || tag.trim() === ""){
        throw new Error("Tags must be non-empty strings.");
      }  
    });
};

const validateTagSearch = (tags) => {
    if(!tags || typeof tags !== 'string' || tags.trim() === ''){
        throw new Error('A valid tag must be provided as a query parameter.');
    }
};

const validateSortOrder = (sort) => {
  const valiOrders = ['ASC', 'DESC'];
  if(sort && !valiOrders.includes(sort.toUpperCase())){
    throw new Error("Invalid sort order. Allowed values are ASC or DESC.");
  }
};

module.exports = { validateQueryParameter, validateUnsplashKey, validateImageUrl, validateTags, validateTagsArray, validateSortOrder, validateTagSearch };