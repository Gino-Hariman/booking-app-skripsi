import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p.attrs({
  className: "font-semibold",
})`
  font-size: 32px;
  text-align: center;
`;
