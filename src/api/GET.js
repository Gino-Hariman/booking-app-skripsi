import React from "react";
import Session from "./auth";
import instanceMain from "./instances";
import { createHttpConfig } from "./utils";

export const get = async ({
  instance = instanceMain,
  path,
  config,
  callback,
  setFetch = () => {},
  errorCallback = () => {},
  finalCallback = () => {},
  redirectOn401 = true,
}) => {
  setFetch(true);
  const httpConfig = await createHttpConfig(config);

  instance
    .get(path, httpConfig)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      if (redirectOn401 && error.response && error.response.status === 401) {
        const { type, code } = error.response.data;
        if (type === "error") {
          Session.destroy("/login?401=true");
        }
      }
      errorCallback(error);
    })
    .finally(() => {
      setFetch(false);
      // finalCallback();
    });
};

export const GET = ({
  path,
  callback,
  setFetch = () => {},
  errorCallback = () => {},
  finalCallback = () => {},
}) => {
  get({
    instance: instanceMain,
    path,
    callback,
    setFetch,
    errorCallback,
    finalCallback,
  });
};
