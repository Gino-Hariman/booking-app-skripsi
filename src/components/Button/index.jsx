import ButtonContainer from "./styles";

const Button = ({ text, handleClick }) => {
  return <ButtonContainer onClick={handleClick}>{text}</ButtonContainer>;
};

export default Button;
