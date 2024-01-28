const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

module.exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb connected nicely");
    })
    .catch((error) => console.log(error));
};
