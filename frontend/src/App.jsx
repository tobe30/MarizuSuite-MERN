import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Index from './pages/Index';
import About from './pages/About';
import Room from './pages/Room';
import Detail from './pages/Detail';
import RoomDashboard from './pages/dashboard/RoomDashboard';
import { ToastContainer } from 'react-toastify';
import AvailableRoom from './pages/AvailableRoom';
import Register from './pages/dashboard/Register';
import Login from './pages/dashboard/Login';
import { useQuery } from '@tanstack/react-query';

function App() {

  const { data:authUser} = useQuery({
    //we use querykey to give a unique name to our query and refer to it later
    queryKey: ['authUser'],
    queryFn: async()=>{
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
				if(data.error) return null;
        if(!res.ok){
					throw new Error(data.error || "Something went wrong")
        }
        console.log("authUser is here:", data)
        return data;
      } catch (error) {
        throw new Error(error)
      }
    },
    retry:false,
    refetchOnWindowFocus: false,
  });
  if (authUser === undefined) return null; // Don't render anything until authUser is defined (either user or null)

  return (
    <Router>
      <Routes>
         <Route path="/register"  element={!authUser ? <Register/> : <Navigate to="/"/>} />
        <Route path="/login" element={!authUser ? <Login />: <Navigate to="/"/>} />
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/room" element={<Room />} />
        <Route path="/room/:id" element={<Detail authUser={authUser} />} />
        <Route path="/dashboard/add" element={<RoomDashboard />} />
        <Route path="/available-rooms" element={<AvailableRoom />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
