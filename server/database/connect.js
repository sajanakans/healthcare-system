const mongoose = require('mongoose');

const connectDB = (url) => {
  mongoose.set('strictQuery', true);

  mongoose.connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(`Error connecting to MongoDB: ${err}`));
}

module.exports = connectDB;
