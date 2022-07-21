const { Schema, model } = require("mongoose");

const travelSchema = new Schema(
  {
    durationDates: { //we need two fields (start and end) to store the duration of the travel
      type: Date,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    type: {
      enum: ["Eco, Family, Friends, Only Women"],
      required: true,
    },
    origin: {
      type:"Point",
      coordinates: [],
      required:true,
    },
    destination: {
      type:"Point",
      coordinates: [],
      required:true, //geojson
    },
    route: {
      type: String,
    },
    images: {
      type: String,
    },
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
