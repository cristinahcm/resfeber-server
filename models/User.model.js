const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,

      unique: true,
    },
    travels: [
      {
        type: Schema.Types.ObjectId,
        ref: "Travel",
      },
    ],
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    picture: {
      type: String,
    },
    interests: [
      {
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
      },
    ],
    gender: {
      enum: ["Female", "Male", "Other"],
    },
    age: {
      type: Number,
    },
    comments: {
      type: String,
    },
    isFavorite: [
      {
        type: Schema.Types.ObjectId,
        ref: "Travel",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
