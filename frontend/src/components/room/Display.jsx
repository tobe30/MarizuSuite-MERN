import React from 'react'
import './room.css' // Assuming you have a CSS file for styling
import { useQuery } from "@tanstack/react-query";
import { useLocation, Link } from 'react-router-dom';

const Display = () => {
   const { data: rooms, isLoading, isError, error } = useQuery({
    queryKey: ["room"],
    queryFn: async () => {
      const res = await fetch("/api/room/all");
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      return json;
    }
  });


  if (isLoading) return <p className="text-center">Loading rooms...</p>;
  if (isError) return <p className="text-danger text-center">Error: {error.message}</p>;

  return (
    <div className="row w-100 p-4 mt-4">
      {/* Rooms Display */}
      <div className="col-md-9">
        <div className="row w-100 rooms">
           {rooms?.map((room, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
             <img  
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                src={room?.img || room?.images?.[0] || "https://via.placeholder.com/300"}
                alt={room.name}
              />
            <p className="title mt-4"><Link  to={{ pathname: `/room/${room._id}` }}>
  {room.name}
</Link></p>
            <p className="snippet">Price at <span className="price">&#8358;{room.price}</span>/night</p>
          </div>
          ))}
        </div>
      </div>

      {/* Reservation Form */}
      <div className="col-md-3">
        <div className="booking-section">
          <p className="title">Make Reservation</p>
          <p className="info-snippet text-primary">Filter coming soon *</p>
          <form>
            <button className="button button-primary px-5 py-3 mt-4" type='' name="set_room_details">
              Filter not available yet
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Display
