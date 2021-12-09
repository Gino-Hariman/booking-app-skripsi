import { useState } from "react";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import OTPInput from "./components/OTPInput";
import TextInput from "./components/TextInput";
import StyledForm from "./styles";

const options = ["Aryaduta", "Lippo Plaza"];
function App() {
  const [selected, setSelected] = useState("");
  return (
    <>
      {/* <TextInput /> */}
      {/* <Dropdown
        selected={selected}
        setSelected={setSelected}
        options={options}
      />
      <Button text={"Find Now"} handleClick={() => console.log("tesst")} /> */}

      <div>
        - Number OTP:
        <OTPInput
          autoFocus
          length={6}
          onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
        />
      </div>
    </>

    // <StyledForm>
    //   <h1 className="font-bold font-sans text-H1">Hello</h1>
    //   <form>
    //     <input type="text" placeholder="Full name" />
    //     <input type="text" placeholder="Email" />
    //     <input type="text" placeholder="Password" />
    //     <button>Sign In</button>
    //   </form>
    // </StyledForm>
  );
}

export default App;
