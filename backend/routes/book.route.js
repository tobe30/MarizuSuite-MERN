import express from 'express';
import { checkAvailability, createBooking } from '../controllers/book.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';


const router = express.Router();

router.post('/check-availability', checkAvailability);
router.post('/create', protectRoute, createBooking);


export default router;
