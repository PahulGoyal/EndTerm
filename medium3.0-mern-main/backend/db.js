const mongoose = require("mongoose");

const url =
  "mongodb+srv://sejalsingh1291:s0JBmh3UlhQQrdrf@cluster0.7vs0q4x.mongodb.net/?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
