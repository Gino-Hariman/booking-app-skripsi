import React, { useState } from "react";
import Container from "../../components/Container";
import Dropdown from "../../components/Dropdown";
import { H1, H4 } from "../../components/Typography";
import { buildingOptions } from "../../Data/buildingOptions";
import { HomePageContainer } from "./styles";

const HomePage = () => {
  const [selected, setSelected] = useState("");

  return (
    <Container>
      <div className="flex flex-col items-center mx-10 md:mx-28 mb-2.5">
        <H1>BOOK your seat</H1>
        <H4 className="text-black-50 text-center break-words mb-12">
          Now available <span className="text-primary">15 seat</span> today at
          UPH Lippo Plaza, Book yours Now
        </H4>
        <Dropdown
          selected={selected}
          setSelected={setSelected}
          options={buildingOptions}
        />
      </div>
    </Container>
  );
};

export default HomePage;
