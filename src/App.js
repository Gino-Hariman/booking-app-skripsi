import { useState } from "react";
import Login from "./pages/Authentication/Login";
import HomePage from "./pages/HomePage";
import VerifyOTP from "./pages/VerifyOTP";

const options = ["Aryaduta", "Lippo Plaza"];
function App() {
  const [selected, setSelected] = useState("");
  return <VerifyOTP studentName="gino.uph.edu" />;
}

export default App;
