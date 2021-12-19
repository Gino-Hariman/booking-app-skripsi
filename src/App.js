import { useState } from "react";
import Login from "./pages/Authentication/Login";
import HomePage from "./pages/HomePage";

const options = ["Aryaduta", "Lippo Plaza"];
function App() {
  const [selected, setSelected] = useState("");
  return <HomePage />;
}

export default App;
