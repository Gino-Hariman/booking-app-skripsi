import { useState } from "react";
import Login from "./pages/Authentication/Login";

const options = ["Aryaduta", "Lippo Plaza"];
function App() {
  const [selected, setSelected] = useState("");
  return <Login />;
}

export default App;
