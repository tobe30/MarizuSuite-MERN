import React, { useState, useEffect } from "react";
import "../room/room.css";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { toast } from 'react-toastify';
import useAuthUser from "../../hooks/useAuthUser";


const RoomDetail = () => {
  const { id } = useParams();

const location = useLocation();
const initialCheckIn = location.state?.checkIn || "";
const initialCheckOut = location.state?.checkOut || "";
const initialadults = location.state?.adults || 1;
const initialchildren = location.state?.children || 0;

  console.log('Check-in:', initialCheckIn);
  console.log('Check-out:', initialCheckOut);
  // Do something with it (show in booking form or anywhere)
const [checkIn, setCheckIn] = useState(initialCheckIn);
const [checkOut, setCheckOut] = useState(initialCheckOut);
const [username, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [adults, setAdults] = useState(location.state?.adults || 1);
const [children, setChildren] = useState(location.state?.children || 0);

const queryClient = useQueryClient();
const { data: authUser } = useAuthUser();



  const { mutate: createBooking, isPending,isError,error} = useMutation({
    mutationFn: async ({username, email, phone, checkIn, checkOut, adults, children}) => {
  try {
    const res = await fetch("/api/bookings/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomId: id,
        username,
        email,
        phone,
        checkIn,
        checkOut,
        adults,
        children,
      }),
    });
    const data = await res.json();
				if(!res.ok){
					throw new Error(data.error || "Something went wrong")
				}
				return data
  } catch (error) {
    throw new Error(error)
  }
},
onSuccess: ()=> {
			toast.success("Your booking was successful and a confirmation email has been sent to you")
			queryClient.invalidateQueries({queryKey: ['book']})
		}
  })



  const { data: detail, isLoading } = useQuery({
    queryKey: ["detail"],
    queryFn: async () => {
      try {
        const res = await fetch(`/api/room/${id}`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
  });

  const images = detail?.img || [];
const config = {
  public_key: "FLWPUBK_TEST-5c123e29805f4262236bd77c528911aa-X",
  tx_ref: Date.now().toString(),
  amount: detail?.price || 0,
  currency: "NGN",
  payment_options: "card,mobilemoney,ussd",
  customer: {
    email: email,
    phonenumber: phone,
    name: username,
  },
  customizations: {
    title: "Marizu Suites",
    description: `Payment for ${username}`,
    logo: "/assets/images/logo.png",
  },
};

const handleFlutterPayment = useFlutterwave(config);
const handleBookNow = () => {
  if (!username || !email || !phone || !checkIn || !checkOut) {
    return toast.error("Please fill all fields");
  }

  handleFlutterPayment({
    callback: (response) => {
      if (response.status === "successful") {
        createBooking({
          username,
          email,
          phone,
          checkIn,
          checkOut,
          adults,
          children,
        });
        closePaymentModal(); // close modal manually
      } else {
        toast.error("Payment failed or was cancelled");
      }
    },
    onClose: () => {
      console.log("Payment popup closed");
    },
  });
};


useEffect(() => {
  if (authUser) {
    setName(authUser.username || "");
    setEmail(authUser.email || "");
  }
}, [authUser]);


  return (
    <div className="room-details">
      <div className="d-flex justify-content-between px-4 pt-5 me-4">
        <p className="title">{detail?.name || "Room Name"}</p>
        <p className="snippet">
          Price at{" "}
          <span className="price">
            &#8358;{Number(detail?.price || 0).toLocaleString()}.00
          </span>
          /night
        </p>
      </div>

      {/* Room gallery */}
      <div className="row w-100 px-4 pb-3">
        <div className="col-md-9" style={{ height: "auto" }}>
          <div
            id="roomSlider"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {images.length === 0 ? (
                <div className="carousel-item active">
                  <img
                    src="/assets/images/default-room.jpg"
                    className="d-block w-100 img-fluid"
                    style={{ objectFit: "cover", maxHeight: "500px" }}
                    alt="Default Room"
                  />
                </div>
              ) : (
                images.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  >
                    <img
                      src={imgSrc}
                      className="d-block w-100 img-fluid"
                      style={{ objectFit: "cover", maxHeight: "500px" }}
                      alt={`Room Image ${idx + 1}`}
                    />
                  </div>
                ))
              )}
            </div>

            {/* Thumbnails */}
            <div
              className="d-flex mmm justify-content-center flex-wrap gap-2"
              style={{ marginTop: "10px" }}
            >
              {images.map((imgSrc, idx) => (
                <img
                  key={idx}
                  src={imgSrc}
                  data-bs-target="#roomSlider"
                  data-bs-slide-to={idx}
                  className="img-thumbnail"
                  style={{ height: "80px", width: "auto", cursor: "pointer" }}
                  alt={`Thumbnail ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Reservation form */}
        <div className="col-md-3 ms-auto">
           {authUser ? (
      <div className="booking-section me-auto">
        <p className="title" style={{ fontSize: 28 }}>
          Make Reservation
        </p>
        <p className="info-snippet">Required fields are followed by *</p>

        <div className="date-picker pb-3 border-bottom">
          <label className="px-2">DEPATURE DATE</label>
          <input
            type="text"
            name="checkOut"
            value={checkIn ? new Date(checkIn).toISOString().split('T')[0]
      : ''}
            onChange={(e) => setCheckIn(e.target.value)}
            placeholder="Select a date"
          />
        </div>
        <div className="date-picker pb-3 border-bottom">
          <label className="px-2">DEPATURE DATE</label>
          <input
            type="text"
            name="checkOut"
            value={checkOut? new Date(checkOut).toISOString().split('T')[0]
      : ''}
            onChange={(e) => setCheckOut(e.target.value)}
            placeholder="Select a date"
          />
        </div>
        <div className="number pb-3 border-bottom">
              <div><span className="px-1">ADULTS</span></div>
              <input type="number" placeholder="0" name="no_of_adults" defaultValue={adults} onChange={e => setAdults(parseInt(e.target.value))}/>
            </div>
            <div className="number pb-3 border-bottom">
              <div><span className="px-1">CHILDREN</span></div>
              <input type="number" placeholder="0" name="no_of_children" defaultValue={children} onChange={e => setChildren(parseInt(e.target.value))}/>
            </div>
        <div className="pb-3 border-bottom">
          <label className="px-2">username</label>
          <input
            type="text"
            name="username"
            defaultValue={authUser.username}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name"
          />
        </div>
        <div className="pb-3 border-bottom">
          <label className="px-2">EMAIL</label>
          <input
            type="email"
            name="email"
            value={authUser.email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="pb-3 border-bottom">
          <label className="px-2">PHONE NUMBER</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone"
          />
        </div>

        <button
          className="button button-primary px-5 py-3 mt-4"
          onClick={handleBookNow}
        >
          Pay
        </button>
        {isError && <p className="text-danger mt-2">{error.message}</p>}
      </div>
           ) : (
            <div className="booking-section me-auto text-center">
      <p>Please login to continue</p>
      <button
        className="button button-primary px-5 py-3 mt-4"
        onClick={() => {
          // redirect to login page or open login modal
          // example using react-router:
          window.location.href = "/login";
        }}
      >
        Login to continue
      </button>
    </div>
  )}
    </div>
      </div>

    </div>
  );
};

export default RoomDetail;
