const { Schema, model } = require("mongoose");

const travelSchema = new Schema(
  {
    initialDate: { 
      type: Date,
    },
    finalDate: { 
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
       
      },
      coordinates: {
        type: [Number],
       
      }
      
    },
    destination: {
      type: {
        type: String, 
        enum: ['Point'], 
       
      },
      coordinates: {
        type: [Number],
       
      }
    },
    route: {
      type: String,
    },
    budget: {
      type: Number,
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
