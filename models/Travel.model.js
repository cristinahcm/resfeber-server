const { Schema, model } = require("mongoose");

const travelSchema = new Schema(
  {
    initialDate: { 
      type: Date,
    },
    finalDate: { 
      type: Date,
    },
    destination: {
      type: String,
     
    },
    typeTravel: 
      {
        type: String,
        enum: [
          "Eco", 
          "Family", 
          "Friends", 
          "Only Women", 
          "Solo",
        ],
      },
    origin: {
        type: String, 
    },
    route: {
      type: String,
    },
    budget: {
      type: Number,
    },
    images: [{
      type: String,
    }],
    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Travel = model("Travel", travelSchema);

module.exports = Travel;
