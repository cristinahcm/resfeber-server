const { Schema, model } = require("mongoose");
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-identicon-sprites";

let svg = createAvatar(style, {
  seed: "custom-seed",
  // ... and other options
});

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    picture: {
      type: String,
    },
    interests: [{
      type: String,
      enum: [
        "Aventurer",
        "Beach",
        "Culture",
        "Food",
        "Nature",
        "Nightlife",
        "Shopping",
      ], 
    }],
    gender: {
      enum: ["Female", "Male", "Other"],
    },
    age: {
      type: Number,
    },
    comments: {
      type: String,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
