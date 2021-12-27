import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import instanceMain from "../api/instances";
import { post } from "../api/POST";

const usePOST = ({
  instance = instanceMain,
  path,
  config = {},
  callback,
  additionalBody = {},
  errorCallback = () => {},
  finalCallback = () => {},
  redirectOn401,
}) => {
  const [isPOSTING, setIsPOSTING] = useState(false);
  const cancelRef = useRef({ cancel: () => {} });

  const handlePOST = (body) => {
    if (!isPOSTING) {
      const { CancelToken } = axios;
      const source = CancelToken.source();
      cancelRef.current = source;
      post({
        instance,
        path,
        body: { ...body, ...additionalBody },
        config: {
          cancelToken: source.token,
          ...config,
        },
        callback,
        setIsPOSTING,
        errorCallback,
        finalCallback,
        redirectOn401,
      });
      return true;
    }
    return false;
  };
  useEffect(() => {
    return () => {
      cancelRef.current.cancel();
    };
  }, []);

  return { handlePOST, isPOSTING };
};

export default usePOST;
