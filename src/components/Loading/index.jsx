import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "../Container";

const Loading = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default Loading;
