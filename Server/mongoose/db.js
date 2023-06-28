const mongoose = require("mongoose");
const mongo_uri =
  "mongodb+srv://oussama:Oussama2001@cluster0.aqunadl.mongodb.net/";

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

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);

module.exports = {
  mongoose: mongoose,
};
