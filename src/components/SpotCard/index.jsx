import React from "react";
import { SpotCardContainer, SpotCardDetails, SpotCardImage } from "./styles";
import imgOffice from "../../assets/image/office.jpg";
import { Caption, H4 } from "../Typography";

const SpotCard = () => {
  return (
    <SpotCardContainer onClick={(id) => console.log("test", id)}>
      <SpotCardImage src={imgOffice} alt="spot image" />
      <SpotCardDetails>
        <H4 className="mb-2 text-white">Aryaduta Spot A</H4>
        <Caption className="text-white">12 Seats Available</Caption>
      </SpotCardDetails>
    </SpotCardContainer>
  );
};

export default SpotCard;
