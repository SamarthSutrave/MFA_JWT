const mangoose = require("mangoose");
const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username :{
        type:String,
        required : true, 
        unique : true,
    },
    password: {
        type : String,
        required : true,
    },
    roles:{
        type : String,
        required : true,
        enum: ["admin", "manager", "user"],
    },
},
{
    timestamps :true,

});

module.exports = mongoose.model("User");