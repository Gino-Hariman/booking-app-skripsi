import Cookies from "js-cookie";
import * as moment from "dayjs";
import utc from "dayjs/plugin/utc";
import instanceMain from "../instances";

moment.extend(utc);

const TOKEN_NAME = process.env.REACT_APP_USER_DATA_TOKEN_NAME;

let user;

const getUserCookie = () => Cookies.get(TOKEN_NAME);

const Session = {
  setUserFromCookie: () => {
    try {
      window.localStorage.setItem(TOKEN_NAME, getUserCookie());
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("server side rendering");
    }
  },
  getUser: () => {
    try {
      const userInfoString = window?.localStorage.getItem(TOKEN_NAME);
      user = JSON.parse(userInfoString);
      return user;
    } catch (err) {
      user = undefined;
      return null;
    }
  },

  isUser: () => {
    if (!user) Session.getUser();
    return user && user.customerid;
  },

  destroy: (path = "/login") => {
    Cookies.remove(TOKEN_NAME);
    window.localStorage.removeItem(TOKEN_NAME);
    window.location.replace(path);
  },

  requestLogout: (callback = () => {}) => {
    instanceMain.get("/auth/logout").then((res) => {
      Session.destroy();
      callback(res.data);
    });
  },
};

export default Session;
