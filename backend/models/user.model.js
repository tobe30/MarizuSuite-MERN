import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
      img: {
        type: String,
      },
      city: {
        type: String,
        default: "",
      },
      phone: {
        type: String,
        default: "",
      },
    password:{
        type: String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        default:false,
    },
},{timestamps: true });


const User = mongoose.model("User", userSchema);

export default User;