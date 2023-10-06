import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is Required"],
      unique: true,
    },
    email: {
      type: String,
      trim: [4, "Email should be atleast 5 characters long"],
      required: [true, "email is Required"],
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Password is Required"],
      select: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
