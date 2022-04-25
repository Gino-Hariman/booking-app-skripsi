import React, { useState } from "react";
import TimeSection from "./TimeSection";

const TimeForm = ({ onChange }) => {
  const [selectedTime, setSelectedTime] = useState([]);

  const handleSelect = (time) => {
    const newState = selectedTime.find((item) => item.id === time.id)
      ? selectedTime.filter((item) => item.id !== time.id)
      : [...selectedTime, time];
    setSelectedTime(newState);
    onChange(newState);
  };

  return (
    <div>
      <TimeSection
        title="Morning"
        times={[
          { id: 1, start: "08.00", end: "09.00" },
          { id: 2, start: "09.00", end: "10.00" },
          { id: 3, start: "10.00", end: "11.00" },
          { id: 4, start: "11.00", end: "12.00" },
        ]}
        selected={selectedTime}
        onSelect={handleSelect}
      />
      <TimeSection
        title="Afternoon"
        times={[
          { id: 5, start: "12.00", end: "13.00" },
          { id: 6, start: "13.00", end: "14.00" },
          { id: 7, start: "14.00", end: "15.00" },
          { id: 8, start: "15.00", end: "16.00" },
        ]}
        selected={selectedTime}
        onSelect={handleSelect}
      />
      <TimeSection
        title="Evening"
        times={[
          { id: 9, start: "18.00", end: "19.00" },
          { id: 10, start: "19.00", end: "20.00" },
        ]}
        selected={selectedTime}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default TimeForm;
