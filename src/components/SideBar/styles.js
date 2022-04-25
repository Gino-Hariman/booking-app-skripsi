import styled from "styled-components";

export const SideBarContainer = styled.div.attrs({
  className: "bg-white font-semibold shadow-md",
})`
  width: 240px;
  height: 100vh;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
`;

export const MenuText = styled.p.attrs({
  className: "text-black-40 text-body",
})`
  padding: 16px 32px;
`;
