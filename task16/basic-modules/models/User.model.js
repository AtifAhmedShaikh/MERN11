const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 2;

const UserSchema = new mongoose.Schema({
   username: {type:String},
   email: {type:String},
   password: {type:String},
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
