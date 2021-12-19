import ButtonContainer from "./styles";

const Button = ({ text, handleClick, onClick }) => (
  <ButtonContainer onClick={onClick || handleClick}>{text}</ButtonContainer>
);

export default Button;
