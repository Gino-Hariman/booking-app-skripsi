import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CloseIcon from "@mui/icons-material/Close";
import { Close, Message, NotifContainer, Title } from "./styles";

const TYPE = {
  success: {
    comp: <CheckCircleIcon className="icon" />,
    color: "success",
  },
  warning: { comp: <ErrorOutlineIcon className="icon" />, color: "warning" },
  loading: {
    comp: <HourglassEmptyIcon className="icon" />,
    color: "info",
  },
};

const Notif = ({ type, title, message, onClose }) => (
  <NotifContainer className={`${TYPE[type].color}`}>
    {TYPE[type].comp}
    <div>
      <Title>{title}</Title>
      <Message>{message}</Message>
    </div>
    <Close onClick={onClose}>
      <CloseIcon />
    </Close>
  </NotifContainer>
);

export default Notif;
