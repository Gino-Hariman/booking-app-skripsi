import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import tailwindConfig from "./tailwind.config";
import "./App.css";
import Admin from "./pages/admin";
import Booking from "./pages/Booking";

const App = () => (
  <ThemeProvider theme={tailwindConfig.theme.colors}>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
