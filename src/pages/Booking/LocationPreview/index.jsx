import React from "react";
import { PreviewContainer, Content, LocationName, AvailSeats } from "./styles";

const LocationPreview = ({ locationImg, locationName, availableSeats }) => (
  <PreviewContainer style={{ backgroundImage: `url(${locationImg})` }}>
    <Content>
      <LocationName>{locationName}</LocationName>
      <AvailSeats>{availableSeats}</AvailSeats>
    </Content>
  </PreviewContainer>
);

export default LocationPreview;
