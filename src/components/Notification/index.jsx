import React from "react";
import ReactDOM from "react-dom";
import Notif from "./component";

let timeout;

const closeNotifOnDurationReach = (el, duration) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    el.setAttribute("style", "opacity: 0;");
    setTimeout(() => {
      if (document.getElementById("notif-sdhfskj"))
        document.body.removeChild(el);
    }, 1000);
  }, duration * 1000);
};

const Notification = (type, title, message, duration) => {
  let el = document.getElementById("notif-sdhfskj");
  if (!el) {
    el = document.createElement("div");
    el.setAttribute("id", "notif-sdhfskj");
    el.setAttribute("class", "notif-container-scsjdke");
    document.body.appendChild(el);
  }

  ReactDOM.render(
    <Notif
      title={title}
      message={message}
      type={type}
      onClose={() => closeNotifOnDurationReach(el, 0)}
    />,
    el
  );
  if (duration !== 0) {
    closeNotifOnDurationReach(el, duration);
  }
};

export default Notification;
