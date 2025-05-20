import React, { useEffect, useState } from 'react';
import flatpickr from 'flatpickr';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    adults: 0,
    children: 0
  });
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  // Initialize flatpickr
  useEffect(() => {
    flatpickr("#datepicker", {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      onChange: ([date]) => setForm(prev => ({ ...prev, checkIn: date }))
    });

    flatpickr("#datepicker1", {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      onChange: ([date]) => setForm(prev => ({ ...prev, checkOut: date }))
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

     if (!form.checkIn || !form.checkOut) {
    toast.error('Please select both check-in and check-out dates.');
    return;
  }

  if (new Date(form.checkIn).getTime() === new Date(form.checkOut).getTime()) {
    toast.error('Arrival date and Depature date cannot be the same.');
    return;
  }

    try {
      const res = await fetch('/api/bookings/check-availability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          checkIn: form.checkIn,
          checkOut: form.checkOut,
          adults: parseInt(form.adults),
          children: parseInt(form.children)
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');

      setResults(data.availableRooms);
      navigate('/available-rooms', { state: { rooms: data, 
    checkIn: form.checkIn,
    checkOut: form.checkOut,
    adults: form.adults,
    children: form.children } });
    } catch (err) {
      setError(err.message);
      toast.error(`Error: ${err.message}`);
    }
  };

  return (
    <section>
      <div className="container-fluid">
{/* <ToastContainer /> */}
        
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column flex-wrap flex-md-row align-items-center">
            {/* Arrival Date */}
            <div className="flex-fill arr-pad border">
              <div className="date-picker">
                <p className="p-style fw-bold text-start mar-lef">ARRIVAL DATE</p>
                <input type="text" id="datepicker" placeholder="Select a date" />
              </div>
            </div>

            {/* Departure Date */}
            <div className="flex-fill arr-pad border">
              <div className="date-picker">
                <p className="p-style fw-bold text-start mar-lef">DEPARTURE DATE</p>
                <input type="text" id="datepicker1" placeholder="Select a date" />
              </div>
            </div>

            {/* Adults & Children */}
            <div className="d-flex align-items-center flex-fill flex-column flex-md-row">
              <div className="d-flex align-items-center justify-content-center flex-fill w-50 arr-pad border">
                <div className="number">
                  <p className="p-style fw-bold text-start">ADULTS</p>
                 <input type="number" name="adults" value={form.adults} onChange={handleChange} />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-center flex-fill w-50 arr-pad border">
                <div className="number">
                  <p className="p-style fw-bold text-start">CHILDREN</p>
                  <input type="number" name="children" value={form.children} onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* Hidden Inputs */}
            <div className="d-none">
              <input type="text" id="noofdays" name="no_of_days" value="0" readOnly />
              <input type="text" id="totalamount" name="total_amount" value="0" readOnly />
            </div>

            {/* Submit Button */}
            <div className="d-flex align-items-center justify-content-center flex-fill arr-pad border">
              <button type="submit" className="btn btn-secondary" name="set_room_details">
                CHECK AVAILABILITY
              </button>
            </div>
          </div>
        </form>
        {/* Show results or error */}
        <div className="mt-3">
          {Array.isArray(results) && results.length > 0 && (
  <div>
    <h5>Available Rooms:</h5>
    <ul>
      {results.map((room) => (
        <li key={room._id}>{room.name} - ${room.price}</li>
      ))}
    </ul>
  </div>
)}

        </div>
      </div>
    </section>
    
  );
};

export default Reservation;
