const validateRequestBody = (body) => {
    const { username, email } = body;
    if(!username || !email) {
       throw new Error("Username and email are required."); 
    }
};

const validateEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
       throw new Error("Invalid email format"); 
    }
};

validateUserId = (userId) => {
    if(!userId || isNaN(userId)){
       throw new Error("Invalid or missing userId");  
    }
};

module.exports = { validateRequestBody, validateEmailFormat, validateUserId };