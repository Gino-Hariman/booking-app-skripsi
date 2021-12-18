import React from "react";
import { H1, H4 } from "../../components/Typography";
import { HomePageContainer } from "./styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <H1>BOOK your seat</H1>
      <H4 className="text-black-50">
        Now available 15 seat today at UPH Lippo Plaza, Book yours Now
      </H4>
    </HomePageContainer>
  );
};

export default HomePage;
