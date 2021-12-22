import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <ThemeProvider theme={tailwindConfig.theme.colors}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/book/processing" element={<BookingProcessing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/set-profile" element={<SetProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/spot" element={<Spot />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
