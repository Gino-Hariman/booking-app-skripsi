import React, { useState } from "react";
import ActionForm from "./ActionForm";
import ChairForm from "./forms/ChairForm";
import DateForm from "./forms/DateForm";
import TimeForm from "./forms/TimeForm";

const STEPS = [
  {
    id: "date",
    title: "Book Date",
    actionName: "Choose Date",
    form: DateForm,
  },
  {
    id: "time",
    title: "Book Time",
    actionName: "Choose Time",
    form: TimeForm,
  },
  {
    id: "chair",
    title: "Book Chair",
    actionName: "Choose Time",
    form: ChairForm,
  },
];

const BookingAction = () => {
  const [currStep, setCurrStep] = useState(0);
  const [values, setValues] = useState({});

  const form = STEPS[currStep];

  const handleChange = (value) =>
    setValues((curr) => ({ ...curr, [form.id]: value }));

  const handleSubmit = () => setCurrStep((curr) => curr + 1);

  return (
    <ActionForm
      title={form.title}
      actionName={form.actionName}
      form={<form.form onChange={handleChange} />}
      onActionSubmit={handleSubmit}
      submitDisabled={!values[form.id]}
    />
  );
};

export default BookingAction;
