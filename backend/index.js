import path from "path";
import express from 'express';
import dotenv from 'dotenv';
//step 2
import connectMongoDB from "./db/connectMongoDB.js";
import {v2 as cloudinary} from "cloudinary"
import authRoute from './routes/auth.route.js';
import roomRoute from './routes/room.route.js';
import bookRoute from './routes/book.route.js';
import cookieParser from 'cookie-parser';


dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json({limit:"5mb"}))
app.use(express.urlencoded({ extended: true }));



//step 3 middleware
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/room", roomRoute)
app.use("/api/bookings", bookRoute)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

// step 1  
app.listen(PORT, () => {
    console.log('Server is running on port' + PORT);
    connectMongoDB()
})