import axios from "axios";

const instanceMain = axios.create({
  baseURL: `${process.env.REACT_APP_MAIN_HOST}`,
  withCredentials: true,
});

export default instanceMain;
