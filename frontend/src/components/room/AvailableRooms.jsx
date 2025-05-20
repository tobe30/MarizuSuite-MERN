import './room.css' // Assuming you have a CSS file for styling
import { useLocation, Link } from 'react-router-dom';

const AvailableRooms = () => {
    const location = useLocation();
    const availableRooms = location.state?.rooms || [];
    const checkIn = location.state?.checkIn || '';
    const checkOut = location.state?.checkOut || '';
    const adults = location.state?.adults || '';
    const children = location.state?.children || '';

  return (
    <div className="row w-100 p-5 ms-3 mt-4">
      {/* Rooms Display */}
      <div className="col-md-9">
        <div className="row w-100 rooms">
            {availableRooms.length > 0 ? (
            availableRooms.map((room) => (
          <div className="col-md-6 mb-4">
            <img  style={{ width: '100%', height: '250px', objectFit: 'cover' }} src={room.img || 'assets/images/default.jpg'} alt="Studio Imperial" />
            <p className="title mt-4"><Link 
  to={`/room/${room._id}`}
  state={{ checkIn, checkOut, adults, children }}
>
  {room.name}
</Link>
</p>
            <p className="snippet">Price at <span className="price">&#8358;{Number(room.price).toLocaleString()}.00</span>/night</p>
          </div>
          ))
          ) : (
            <p className="text-muted">No available rooms for the selected dates.</p>
            )}
        </div>
      </div>

      {/* Reservation Form */}
     <div className="col-md-3">
        <div className="booking-section">
          <p className="title">Make Reservation</p>
          <p className="info-snippet">Required fields are followed by *</p>
          <form action="controllers/Server.php" method="POST">
            <div className="date-picker pb-3 border-bottom">
              <div><span className="px-2">ARRIVAL DATE</span></div>
              <input type="text" id="datepicker" name="from" placeholder="Select a date" defaultValue={
    checkIn
      ? new Date(checkIn).toISOString().split('T')[0]
      : ''
  } />
            </div>
            <div className="date-picker pb-3 border-bottom">
              <div><span className="px-2">DEPARTURE DATE</span></div>
              <input type="text" id="datepicker1" name="to" placeholder="Select a date" defaultValue={
    checkOut
      ? new Date(checkOut).toISOString().split('T')[0]
      : ''
  } />
            </div>
           
            <div className="number pb-3 border-bottom">
              <div><span className="px-1">ADULTS</span></div>
              <input type="number" placeholder="0" name="no_of_adults" defaultValue={adults} />
            </div>
            <div className="number pb-3 border-bottom">
              <div><span className="px-1">CHILDREN</span></div>
              <input type="number" placeholder="0" name="no_of_children" defaultValue={children} />
            </div>
            <div className="d-none">
              <input type="text" id="noofdays" name="no_of_days" value="0" />
              <input type="text" id="totalamount" name="total_amount" value="0" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AvailableRooms
