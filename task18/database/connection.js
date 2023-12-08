const mongoose = require("mongoose");

async function connectDatabase() {
  await mongoose
    .connect("mongodb+srv://atifahmad2219:ecommerceapp@cluster0.malln0y.mongodb.net/store?retryWrites=true&w=majority")
    .then(() => {
      console.log("database is connected");
    })
    .catch((e) => console.log(e));
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports = connectDatabase; // default
// module.exports = {connectDatabase}// named export
