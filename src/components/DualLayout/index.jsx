import React from "react";
import imgOffice from "../../assets/image/office.jpg";
import Navbar from "../Navbar";

import {
  Container,
  LayoutContainer,
  LeftContainer,
  LeftImage,
  RightContainer,
} from "./styles";

const DualLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Container>
        <LeftContainer>
          <LeftImage src={imgOffice} alt="login_image" />
        </LeftContainer>
        <RightContainer>{children}</RightContainer>
      </Container>
    </LayoutContainer>
  );
};

export default DualLayout;
