const mongoose = require("mongoose");
const mongo_uri =
  "mongodb+srv://oussama:Oussama2001@cluster0.aqunadl.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose
  .connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = mongoose;
