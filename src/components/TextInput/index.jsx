import { Label, StyledTextInput, TextInputContainer } from "./styles";

const TextInput = ({ setInputData }) => {
  const onChange = (event) => {
    setInputData(event.target.value);
  };
  return (
    <TextInputContainer>
      <Label for="email">Student Email</Label>
      <StyledTextInput
        onChange={onChange}
        type="email"
        id="email"
        placeholder="Email UPH kamu"
      />
    </TextInputContainer>
  );
};

export default TextInput;
