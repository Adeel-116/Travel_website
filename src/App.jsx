import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage/LandingPage";
import FlightDetails from "./Pages/FlightDetails/FlightDetails";
import BookingDetails from "./Pages/BookingDetails/BookingDetails";
import AddNewCard from "./Pages/BookingDetails/AddNewCard";
import Login from "./Pages/LoginSignup/Login";
import Signup from "./Pages/LoginSignup/Signup";
import ForgetPassword from "./Pages/LoginSignup/ForgetPassword";
import VerifyCode from "./Pages/LoginSignup/VerifyCode";
import SetPassword from "./Pages/LoginSignup/SetPassword";

function App() {
  return (
    <Router> {/* Wrap everything with Router */}
      <Routes> {/* Define routes using Routes */}
        <Route path="/" element={<LandingPage />} /> {/* LandingPage route */}
        <Route path="/flight-details" element={<FlightDetails />} /> {/* FlightDetails route */}
        <Route path="/booking-details" element={<BookingDetails />} /> {/* BookingDetails route */}
        <Route path="/add-new-card" element={<AddNewCard />} /> {/* AddNewCard route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/signup" element={<Signup />} /> {/* Signup route */}
        <Route path="/forget-password" element={<ForgetPassword />} /> {/* ForgetPassword route */}
        <Route path="/verify-code" element={<VerifyCode />} /> {/* VerifyCode route */} 
        <Route path="/set-password" element={<SetPassword />} /> {/* SetPassword route */}
      </Routes>
    </Router>
  );
}

export default App;
