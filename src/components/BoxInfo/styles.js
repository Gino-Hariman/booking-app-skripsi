import styled from "styled-components";

const BoxContainer = styled.div.attrs({
  className: "flex bg-white",
})`
  justify-content: space-between;
  align-items: center;
  min-width: 280px;
  padding: 32px;
  border-radius: 10px;
`;

export default BoxContainer;
