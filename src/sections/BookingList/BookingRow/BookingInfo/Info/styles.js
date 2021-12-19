import styled from "styled-components";

export const InfoContainer = styled.div.attrs({
  className: "flex",
})`
  padding-right: 20px;
  align-items: center;
`;

export const Text = styled.p.attrs({
  className: "text-content",
})`
  color: ${({ theme }) => theme.black[60]};
  padding-left: 8px;
`;
