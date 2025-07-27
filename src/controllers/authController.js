const user = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { response } = require("express");
const jwt = require("jsonwebtoken");


const register = async(req , res) => {
    try{
  const  {username , password, role}= req.body ;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserActivation({username,password:hashedPassword, role});
    await newUser.save();
    res.status(201).json({message: `user registered with user name ${username}`});
}
    catch(err){
res.status(500).json({message: `user registered with username ${username}`});

    }
};

const login =async(req, res) =>{
    try{
    const {username, password} = req.body;
    const user = await UserActivation.findone({username});

    if(!user){

    }
    }catch(err){
        res.status(500).json({message: `user registered with username ${username}`});
    }

};

module.exports = {
    register, 
    login,
}; 