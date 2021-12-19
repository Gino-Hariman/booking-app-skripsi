import React from "react";
import { Button } from "../../../../components/buttons";
import { Container, Title } from "./styles";

const ActionForm = ({
  title,
  form,
  actionName,
  onActionSubmit,
  submitDisabled,
}) => (
  <Container>
    <Title>{title}</Title>
    <div className="py-10">{form}</div>
    <Button disabled={submitDisabled} onClick={onActionSubmit}>
      {actionName}
    </Button>
  </Container>
);

export default ActionForm;
