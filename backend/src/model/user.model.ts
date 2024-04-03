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
      type: String,
    },
    Aadhar_no: {
      type: String,
    },
    Mobile_no: {
      type: String,
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
