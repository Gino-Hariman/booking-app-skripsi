import React, { useState } from "react";
import TimeSection from "./TimeSection";

const TimeForm = ({ onChange }) => {
  const [selectedTime, setSelectedTime] = useState();

  const handleSelect = (time) => {
    setSelectedTime(time);
    onChange(time);
  };

  return (
    <div>
      <TimeSection
        title="Morning"
        times={[
          { start: "08.00", end: "09.00" },
          { start: "09.00", end: "10.00" },
          { start: "10.00", end: "11.00" },
          { start: "11.00", end: "12.00" },
        ]}
        selected={selectedTime}
        onSelect={handleSelect}
      />
      <TimeSection
        title="Afternoon"
        times={[
          { start: "12.00", end: "13.00" },
          { start: "13.00", end: "14.00" },
          { start: "14.00", end: "15.00" },
          { start: "15.00", end: "16.00" },
        ]}
        selected={selectedTime}
        onSelect={handleSelect}
      />
      <TimeSection
        title="Evening"
        times={[
          { start: "18.00", end: "19.00" },
          { start: "19.00", end: "20.00" },
        ]}
        selected={selectedTime}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default TimeForm;
