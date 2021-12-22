import React from "react";
import Session from "./auth";
import instanceMain from "./instances";
import { createHttpConfig } from "./utils";

export const post = async ({
  instance,
  path,
  body,
  config,
  callback,
  setIsPOSTING = () => {},
  errorCallback = () => {},
  finalCallback = () => {},
  redirectOn401 = true,
}) => {
  setIsPOSTING(true);
  const httpConfig = await createHttpConfig(config);
  instance
    .post(path, body, httpConfig)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      if (redirectOn401 && error.response && error.response.status === 401) {
        const { type, code } = error.response.data;
        if (type === "error") {
          Session.destroy();
        }
      }
      errorCallback(error);
    })
    .finally(() => {
      setIsPOSTING(false);
      finalCallback();
    });
};

export const POST = (
  path,
  body,
  config,
  callback,
  setIsPOSTING = () => {},
  errorCallback = () => {},
  finalCallback = () => {}
) => {
  post({
    instance: instanceMain,
    path,
    body,
    config,
    callback,
    setIsPOSTING,
    errorCallback,
    finalCallback,
  });
};
