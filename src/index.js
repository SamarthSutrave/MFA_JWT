const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect= require("./config/dbConnect");// importing of the dbconnect from the config 
const authRoutes = require("./routes/authRoutes");
dbConnect(); 

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);

// start the server
const PORT  = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is Running succesfully at port ${PORT}`);
})