const user = require("../models/userModel");
const bcrypt = require("bcryptjs");

const register = async(req , res) => {
  const  {username , password, role}= req.body ;

};

const login =async(req, res) =>{
    
};

module.exports = {
    register, 
    login,
}; 