const mongoose = require("mongoose");
const {mongodbURL} = require("../secret");

const databaseConnection = async(options = {}) => {
    try {
        await mongoose.connect(mongodbURL, options);
        console.log("Connected to MongoDB successfully established!");
        mongoose.connection.on("error", (error) => {
            console.error("DB connection error: ", error);
        })
        
    } catch (error) {
        console.log("Could not connect to db", error.toString()); 
    }
}

module.exports = databaseConnection;