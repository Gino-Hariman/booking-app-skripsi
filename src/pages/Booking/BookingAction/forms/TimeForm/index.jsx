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
      {/* <TimeSection
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
      /> */}

      <TimeSection
        title="Morning"
        times={[
          {
            id: 1,
            "08.00-09.00": [
              { key: 1, chair: "a1" },
              { key: 2, chair: "a2" },
              { key: 3, chair: "a3" },
            ],
          },
          { id: 2, "09.00-10.00": [] },
          {
            id: 3,
            "10:00-11:00": [
              { key: 1, chair: "b2" },
              { key: 2, chair: "b6" },
              { key: 3, chair: "b1" },
            ],
          },
          {
            id: 4,
            "11:00-12:00": [
              { key: 1, chair: "cc2" },
              { key: 2, chair: "cc1" },
              { key: 3, chair: "cc5" },
            ],
          },
        ]}
        selected={selectedTime}
        onSelect={handleSelect}
      />

      <TimeSection
        title="Afternoon"
        times={[
          {
            id: 5,
            "12.00-13.00": [],
          },
          {
            id: 6,
            "13.00-14.00": [
              { key: 1, chair: "da1" },
              { key: 2, chair: "da3" },
              { key: 3, chair: "da4" },
            ],
          },
          {
            id: 7,
            "14.00-15.00": [
              { key: 1, chair: "ys2" },
              { key: 2, chair: "ys4" },
              { key: 3, chair: "ys1" },
            ],
          },
          {
            id: 8,
            "15.00-16.00": [
              { key: 1, chair: "ee0" },
              { key: 2, chair: "ee2" },
              { key: 3, chair: "ee1" },
            ],
          },
        ]}
        selected={selectedTime}
        onSelect={handleSelect}
      />

      <TimeSection
        title="Evening"
        times={[
          {
            id: 9,
            "18:00-19:00": [
              { key: 1, chair: "ui1" },
              { key: 2, chair: "ui0" },
              { key: 3, chair: "ui7" },
            ],
          },
          {
            id: 10,
            "9:00-20:00": [],
          },
        ]}
        selected={selectedTime}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default TimeForm;
