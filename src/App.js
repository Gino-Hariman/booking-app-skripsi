import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import tailwindConfig from "./tailwind.config";
import "./App.css";
import Admin from "./pages/admin";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import SetProfile from "./pages/Profile/SetProfile";

import HomePage from "./pages/HomePage";
import BookingProcessing from "./pages/Booking/BookingProcessing";
import Navbar from "./components/Navbar";
import Login from "./pages/Authentication/Login";
import VerifyOTP from "./pages/VerifyOTP";
import Spot from "./pages/Spot";
import useAuth from "./hooks/useAuth";
import Loading from "./components/Loading";
// import Spot from "./pages/Booking/BookingAction/forms/Spot";

const RequireAuth = ({ children }) => {
  const state = useAuth();
  const location = useLocation();
  console.log("satesss", state.authed);
  return state.authed === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

const App = () => {
  const state = useAuth();

  if (state?.loading) return <Loading />;
  return (
    <ThemeProvider theme={tailwindConfig.theme.colors}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/booking"
            element={
              <RequireAuth>
                <Booking />
              </RequireAuth>
            }
          />
          <Route path="/processing" element={<BookingProcessing />} />
          <Route path="/set-profile" element={<SetProfile />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/spot"
            element={
              <RequireAuth>
                <Spot />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
