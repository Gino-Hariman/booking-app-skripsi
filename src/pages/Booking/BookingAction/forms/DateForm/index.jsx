import React, { useState } from "react";
import dayjs from "dayjs";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import DateContainer from "./styles";

const DateForm = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <DateContainer>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <CalendarPicker
          minDate={dayjs()}
          showTodayButton
          date={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
            onChange(newValue);
          }}
        />
      </LocalizationProvider>
    </DateContainer>
  );
};

export default DateForm;
