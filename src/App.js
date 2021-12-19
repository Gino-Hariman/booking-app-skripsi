import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Admin from "./pages/admin";
import tailwindConfig from "./tailwind.config";
import "./App.css";
import Profile from "./pages/Profile";
import SetProfile from "./pages/Profile/SetProfile";
import SpotCard from "./components/SpotCard";

const App = () => (
  <ThemeProvider theme={tailwindConfig.theme.colors}>
    <SpotCard />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/set-profile" element={<SetProfile />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter> */}
  </ThemeProvider>
);

export default App;
