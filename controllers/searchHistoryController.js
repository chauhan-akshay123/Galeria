const db  = require("../models");
const { validateUserId } = require("../validations/userValidation");

const getSearchHistory = async (req, res) => {
    try{
      const { userId } = req.query;
      
      // Validate userId
      validateUserId(userId);

      const searchHistory = await db.SearchHistory.findAll({
        where: { userId },
        attributes: ['query', 'timestamp'],
        order: [['timestamp', 'DESC']],
      });

      if(searchHistory.length === 0){
        return res.status(404).json({ message: "No search history found for the given user." });
      }

      const formattedHistory = searchHistory.map((entry) => ({
         query: entry.query,
         timestamp: entry.timestamp,
      }));

      return res.status(200).json({ searchHistory: formattedHistory });
    } catch(error){
      console.error('Error fetching search history: ', error.message);
      return res.status(500).json({ error: 'Failed to fetch search history.' }); 
    }
};

module.exports = { getSearchHistory };