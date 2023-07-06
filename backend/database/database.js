const mongoose = require("mongoose");
const connectDatabse = () => {
  mongoose
    .connect(
      process.env.DATABASE,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((con) => {
      console.log("Connected to MongoDB server");
    });
};
module.exports = connectDatabse;
