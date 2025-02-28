const userService = require("../services/userService");
const { validateRequestBody, validateEmailFormat } = require("../validations/userValidation");

const createNewUser = async (req, res) => {
    try{
      const { username, email } = req.body;
      
      validateRequestBody(req.body);
      validateEmailFormat(email);

      const userExists = await userService.doesUserExist(email);
      if(userExists){
        return res.status(400).json({ message: "Email already exists." });
      }

      const newUser = await userService.createUser({ username, email });

      res.status(201).json({
        message: "User created successfully.",
        user: newUser,
      });
  
    } catch(error){
      res.status(500).json({ message: "Error creating a user", error: error.message }); 
    }
};

module.exports = { createNewUser };