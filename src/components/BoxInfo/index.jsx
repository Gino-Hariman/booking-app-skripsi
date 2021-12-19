import React from "react";
import BoxContainer from "./styles";
import Info from "./Info";
import Success from "./icons/Success";
import Warning from "./icons/Warning";
import Danger from "./icons/Danger";
import InfoIcon from "./icons/Info";

const renderIcon = (icon) => {
  switch (icon) {
    case "success":
      return <Success />;
    case "warning":
      return <Warning />;
    case "danger":
      return <Danger />;
    case "info":
      return <InfoIcon />;
    default:
      return <></>;
  }
};

const BoxInfo = ({ label, info, icon }) => (
  <BoxContainer>
    <Info label={label} info={info} />
    {renderIcon(icon)}
  </BoxContainer>
);

export default BoxInfo;
