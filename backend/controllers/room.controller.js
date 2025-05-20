import Room from "../models/room.model.js";
import { v2 as cloudinary } from "cloudinary";


export const createRoom = async (req, res) => {
  try {
    let { img, ...rest } = req.body;

    // Upload image to Cloudinary if present
    if (img) {
      const uploadedResponse = await cloudinary.uploader.upload(img);
      img = uploadedResponse.secure_url;
    }

    // Create room with updated image URL
    const newRoom = new Room({
      ...rest,
      img,
    });

    const savedRoom = await newRoom.save();

    if (!savedRoom) {
      return res.status(400).json({ message: "Failed to create room" });
    }

    res.status(201).json(savedRoom);

  } catch (error) {
    console.error("Error in createRoom controller:", error.message);
    res.status(500).json({ error: "An error occurred during room creation" });
  }
};

export const getAllRooms = async (req, res) =>{
    try {
        const rooms = await Room.find({ isAvailable: true });
        res.status(200).json(rooms);
    } catch (error) {
        console.error("Error in get all rooms controller", error.message);
        res.status(500).json({ message: "Failed to fetch rooms", error: error.message });
    }
}

export const getRoomById = async (req, res) =>{
    try {
        const room = await Room.findById(req.params.id);
        if (!room) return res.status(404).json({ message: "Room not found" });

        res.status(200).json(room);
    } catch (error) {
        console.error("Error in get room by ID controller", error.message);
        res.status(500).json({ message: "Failed to fetch room", error: error.message });
    }
}

export const deleteRoom = async (req, res) =>{
     try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);

    if (!deletedRoom) return res.status(404).json({ message: "Room not found" });
    res.status(200).json({ message: "Room deleted successfully" });

  } catch (err) {
    console.error("Error in delete room controller", err.message);
    res.status(500).json({ message: "Failed to delete room", error: err.message });
  }
}

export const editRoom = async (req, res) =>{
    try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRoom) return res.status(404).json({ message: "Room not found" });
    res.status(200).json(updatedRoom);
  } catch (err) {
    res.status(500).json({ message: "Failed to update room", error: err.message });
  }
};


// export const searchRoom = async (req, res) => {
//     try {
//         const { name } = req.query;
//         const rooms = await Room.find({ name: { $regex: name, $options: "i" } });
//         res.status(200).json(rooms);
//     } catch (error) {
//         console.error("Error in search room controller", error.message);
//         res.status(500).json({ message: "Failed to search rooms", error: error.message });
//     }
// }
