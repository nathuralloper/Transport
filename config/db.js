const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

console.log(db);
const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDb;
