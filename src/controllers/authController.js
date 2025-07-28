const user = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { response } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


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
        return res.status(404).json({message: `User with username ${username} not found `});
    }
    const isMatch = await bcrypt.compare(password , user.password);
    if(!isMatch){
        return register.status(400).json({message: `invalid cridentail`});
    }
    const token =jwt.sign({id :user.id, role:user.role }, process.env.JWT_SECRET,{expiresIn: "1h"});
    res.status(200).json({token});
    }catch(err){
        res.status(500).json({message: `user registered with username ${username}`});
    }

};

module.exports = {
    register, 
    login,
}; 