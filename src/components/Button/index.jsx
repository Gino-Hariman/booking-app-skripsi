import ButtonContainer from "./styles";

const Button = ({ text, handleClick, onClick, disable = false }) => (
  <ButtonContainer disabled={disable} onClick={onClick || handleClick}>
    {text}
  </ButtonContainer>
);

export default Button;
