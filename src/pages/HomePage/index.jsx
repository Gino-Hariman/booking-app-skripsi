import React, { useState } from "react";
import Dropdown from "../../components/Dropdown";
import { H1, H4 } from "../../components/Typography";
import { buildingOptions } from "../../Data/buildingOptions";
import img from "../../assets/image/bg_img.png";
import BackgroundImage from "../../components/BackgroundImage";

const HomePage = () => {
  const [selected, setSelected] = useState("");

  return (
    <BackgroundImage imgUrl={img}>
      <div className="flex flex-col items-center -mt-20 mx-10 md:mx-28 mb-2.5">
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
    </BackgroundImage>
  );
};

export default HomePage;
