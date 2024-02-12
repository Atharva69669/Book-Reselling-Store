import mongoose from "mongoose";
// mongoose.model("collection name", "collection schema")
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
