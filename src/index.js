const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect= require("./config/dbConnect");// importing of the dbconnect from the config 

dbConnect(); 

const app = express();

//Middleware
app.use(express.json());

//Routes


// start the server
const PORT  = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is Running succesfully at port ${PORT}`);
})