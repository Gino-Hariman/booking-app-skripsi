import React from "react";
import { SpotCardContainer, SpotCardDetails, SpotCardImage } from "./styles";
import PropTypes from "prop-types";
import { Caption, H4 } from "../Typography";
import { useNavigate } from "react-router-dom";

const SpotCard = ({ spotId, name, imgUrl }) => {
  const navigate = useNavigate();

  const handleClick = () =>
    navigate("/booking", {
      state: {
        spotId,
      },
    });
  return (
    <SpotCardContainer onClick={handleClick}>
      <SpotCardImage src={imgUrl} alt="spot image" />
      <SpotCardDetails>
        <H4 className="mb-2 text-white">{name}</H4>
        <Caption className="text-white">12 Seats Available</Caption>
      </SpotCardDetails>
    </SpotCardContainer>
  );
};

export default SpotCard;

SpotCard.propTypes = {
  spotId: PropTypes.number,
  name: PropTypes.string,
  imgUrl: PropTypes.string,
};
