import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    auth0Id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    Gender: {
      type: String,
    },
    Age: {
      type: Number,
    },
    Aadhar_no: {
      type: Number,
    },
    Mobile_no: {
      type: Number,
    },
    City: {
      type: String,
    },
    State: {
      type: String,
    },
    PinCode: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
