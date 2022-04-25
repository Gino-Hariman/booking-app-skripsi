import { useState, useEffect, useRef } from "react";
import instanceMain from "../api/instances";

import axios from "axios";
import { get } from "../api/GET";

const useGET = ({
  initial = null,
  initialFetchStatus = true,
  instance = instanceMain,
  path,
  config = {},
  errorCallback = () => {},
  finalCallback = () => {},
  redirectOn401,
  delay = 0,
}) => {
  const [data, setData] = useState(initial);
  const [isFetching, setIsFetching] = useState(initialFetchStatus);
  const [token, setToken] = useState();
  const configRef = useRef(config);
  const errorCallbackRef = useRef();
  errorCallbackRef.current = errorCallback;
  const finalCallbackRef = useRef();
  finalCallbackRef.current = finalCallback;
  const delayRef = useRef(0);
  delayRef.current = delay;

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    const retrieveToken = localStorage.getItem("login_token");
    setToken(JSON.parse(retrieveToken));

    setIsFetching(true);
    const fetchData = setTimeout(
      () =>
        get({
          instance,
          path,
          config: {
            cancelToken: source.token,
            headers: {
              Authorization: `Bearer ${token?.token}`,
            },
            ...configRef.current,
          },
          callback: (res) => {
            setData(res);
            setIsFetching(false);
          },
          errorCallback: (err) => {
            if (!axios.isCancel(err)) setIsFetching(false);
            errorCallbackRef.current(err);
          },
          finalCallback: finalCallbackRef.current,
          redirectOn401,
        }),
      delayRef.current
    );
    return () => {
      setIsFetching(false);
      source.cancel();
      clearTimeout(fetchData);
    };
  }, [path, instance, redirectOn401]);

  return { data, setData, isFetching };
};

export default useGET;
