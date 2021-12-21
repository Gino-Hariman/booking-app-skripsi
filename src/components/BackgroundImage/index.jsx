import React from "react";
import { BgImg } from "./styles";

const BackgroundImage = ({ imgUrl, children }) => (
  <BgImg style={{ backgroundImage: `url(${imgUrl})` }}>{children}</BgImg>
);

export default BackgroundImage;
