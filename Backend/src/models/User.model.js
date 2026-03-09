import mongoose from "mongose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    profileIMG: {
      type: String,
      default: "",
    },
    clerkID: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;
