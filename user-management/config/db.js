const mongoose = require("mongoose");

async function connectDB() {
  try {
    // This now uses the MONGO_URI from your .env file
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB Connected");
  } catch (error) {
    // I added 'error' here so we can see the exact reason if it fails
    console.log("mongo db failed!!!", error.message);
  }
}
module.exports = connectDB;
