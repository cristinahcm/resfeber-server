const { Schema, model } = require("mongoose");

const travelSchema = new Schema(
  {
    durationDates: { //we need two fields (start and end) to store the duration of the travel
      type: Date,
    },
    place: {
      type: String,
     
    },
    type: {
      enum: ["Eco, Family, Friends, Only Women"],
    
    },
    origin: {
      type: {
        type: String, 
        enum: ['Point'], 
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
      
    },
    destination: {
      type: {
        type: String, 
        enum: ['Point'], 
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
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
