import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Admin from "./pages/admin";
import tailwindConfig from "./tailwind.config";
import "./App.css";
import Profile from "./pages/Profile";

const App = () => (
  <ThemeProvider theme={tailwindConfig.theme.colors}>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
