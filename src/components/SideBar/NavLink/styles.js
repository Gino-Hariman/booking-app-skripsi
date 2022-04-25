import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px 32px;
  background-color: ${({ active }) =>
    active ? "rgba(234, 239, 250, 1)" : "transparent"};
  svg {
    color: ${({ active }) =>
      active ? "rgba(234, 239, 250, 1)" : "transparent"} !important;
  }
`;

export const Text = styled.p.attrs({
  className: "font-semibold",
})`
  color: ${({ theme, active }) => (active ? theme.primary : theme.black[40])};
  font-size: 20px;
  padding-left: 12px;
`;

export const Nav = styled(Link)`
  text-decoration: none;
`;
