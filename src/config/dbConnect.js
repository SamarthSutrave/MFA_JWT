// const mongoose = require("mongoose");

// const dbConnect = async () => {
//     const connect = await mangoose.connect(process.env.CONNECTION_STRING);
//     console.log(`Database Connected : ${connect.conection.host}, ${connect.connection.name}`)
// };


// module.exports = dbConnect;
const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
 const connect = await mongoose.connect(process.env.CONNECTION_STRING);
console.log(`Database Connected : ${connect.connection.host}, ${connect.connection.name}`);
    } catch (err) {
 console.error("Database connection failed:", err);
    process.exit(1);
    }
};

module.exports = dbConnect;
