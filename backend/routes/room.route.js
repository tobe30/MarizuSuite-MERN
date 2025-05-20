import express from "express";
import { createRoom, deleteRoom, editRoom, getAllRooms, getRoomById } from "../controllers/room.controller.js";

const router = express.Router();

router.post("/create", createRoom);
router.get("/all", getAllRooms);
router.get("/:id", getRoomById);
router.delete("/:id", deleteRoom);
router.put("/:id", editRoom);



export default router;