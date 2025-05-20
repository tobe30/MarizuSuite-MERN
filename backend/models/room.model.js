// models/Room.js
import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name:{
        type:String,
        required:true
  },
  desc:{
    type:String,
    required:true
  },
  price:{
        type: Number,
        required:true,
    },
  capacity:{
        type: Number,
        required:true,
    }, // optional
  img:{
    type:[String]
  },
  isAvailable: { type: Boolean, default: true },
}, { timestamps: true });

const Room = mongoose.model("Room", roomSchema);

export default Room;