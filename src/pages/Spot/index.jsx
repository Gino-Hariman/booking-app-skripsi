import React from "react";
import SpotCard from "../../components/SpotCard";
import { Container } from "../../styles";
import { ListSpot } from "./styles";

const Spot = () => {
  return (
    <Container className="px-8 sm:px-8 md:px-16 lg:px-20 xl:px-24 flex flex-col items-center">
      <ListSpot>
        <SpotCard />
        <SpotCard />
        <SpotCard />
        <SpotCard />
      </ListSpot>
    </Container>
  );
};

export default Spot;
