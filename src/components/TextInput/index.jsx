import { Label, StyledTextInput, TextInputContainer } from "./styles";

const TextInput = () => {
  return (
    <TextInputContainer>
      <Label for="email">Student Email</Label>
      <StyledTextInput
        type="email"
        id="email"
        placeholder="Example@student.uph.edu"
      />
    </TextInputContainer>
  );
};

export default TextInput;
