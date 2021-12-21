import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import tailwindConfig from "./tailwind.config";
import "./App.css";
import Admin from "./pages/admin";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import SetProfile from "./pages/Profile/SetProfile";
import Spot from "./pages/Spot";
import MySeat from "./pages/MySeat";
import HomePage from "./pages/HomePage";
import BookingProcessing from "./pages/Booking/BookingProcessing";

const App = () => (
  <ThemeProvider theme={tailwindConfig.theme.colors}>
    {/* <Spot /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/processing" element={<BookingProcessing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/set-profile" element={<SetProfile />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
