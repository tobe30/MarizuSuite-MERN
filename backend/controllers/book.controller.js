import Room from '../models/room.model.js';
import Booking from '../models/book.model.js';
import User from '../models/user.model.js';

export const checkAvailability = async (req, res) => {
  const { checkIn, checkOut, adults, children } = req.body;

  if (!checkIn || !checkOut) {
      return res.status(400).json({ message: "checkIn and checkOut dates are required" });
    }

  try {
    const totalGuests = parseInt(adults) + parseInt(children);

    // Get bookings that overlap with the requested date range
    const bookings = await Booking.find({
      $or: [
        {
          checkIn: { $lt: new Date(checkOut) },
          checkOut: { $gt: new Date(checkIn) }
        }
      ]
    });

    const bookedRoomIds = bookings.map(booking => booking.room.toString());

    // Find rooms not in the bookedRoomIds and can handle the guest count
    const availableRooms = await Room.find({
      _id: { $nin: bookedRoomIds },
      capacity: { $gte: totalGuests },
      isAvailable: true
    });

    res.status(200).json(availableRooms);

  } catch (error) {
    console.error("Availability check failed:", error.message);
    res.status(500).json({ error: "An error occurred while checking availability", error: error.message });
  }
};


//create a new booking

export const createBooking = async (req, res) => {
  const { roomId, checkIn, checkOut, username, email, phone, adults, children } = req.body;

  const userId = req.user._id.toString();

  if (!roomId || !checkIn || !checkOut || !username || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newBooking = new Booking({
      room: roomId,
      user: userId,
      username,
      email,
      phone,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      adults: adults || 1,
      children: children || 0,
    });

    await newBooking.save();

    await Room.findByIdAndUpdate(roomId, { isAvailable: false });

    res.status(201).json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    console.error("Booking failed:", error.message);
    res.status(500).json({ error: "An error occurred while processing the booking" });
  }
};
