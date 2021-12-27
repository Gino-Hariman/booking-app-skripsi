import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import CloseIcon from "@material-ui/icons/Close";
import { Close, Message, NotifContainer, Title } from "./styles";

const TYPE = {
  success: {
    comp: <CheckCircleIcon className="icon" />,
    color: "#0EAB00",
  },
  warning: { comp: <ErrorOutlineIcon className="icon" />, color: "orange" },
  loading: {
    comp: <HourglassEmptyIcon className="icon" />,
    color: "#5796e3",
  },
};

const Notif = ({ type, title, message, onClose }) => (
  <NotifContainer color={TYPE[type].color}>
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
