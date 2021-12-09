import React, { memo, useLayoutEffect, useRef } from "react";
import usePrevious from "../../hooks/usePrevious";
import { StyledInput } from "./styles";

const SingleInput = ({ focus, autoFocus, ...rest }) => {
  const inputRef = useRef(null);
  const prevFocus = usePrevious(!!focus);

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return <StyledInput ref={inputRef} {...rest} />;
};

const customSingleInput = memo(SingleInput);
export default customSingleInput;
