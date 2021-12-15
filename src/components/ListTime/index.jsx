import React, { useState } from "react";
import CheckBox from "./Checkbox";
import { ItemContainer, ListTimeContainer, ListTitle } from "./styles";

const scheduleTime = [
  { id: 1, startTime: "08.00", endTime: "13.00" },
  { id: 2, startTime: "13.00", endTime: "14.00" },
  { id: 3, startTime: "08.00", endTime: "13.00" },
  { id: 4, startTime: "13.00", endTime: "14.00" },
  { id: 5, startTime: "08.00", endTime: "13.00" },
  { id: 6, startTime: "13.00", endTime: "14.00" },
];

const ListTime = () => {
  const [selectedItem, setSelectedItem] = useState([]);

  const handleSelect = (id) => {
    const isAlrSelected = selectedItem.includes(id);

    if (!isAlrSelected) return setSelectedItem((curr) => [...curr, id]);

    return setSelectedItem((curr) => curr.filter((itemId) => itemId !== id));
  };

  return (
    <ListTimeContainer>
      <ListTitle>Morning</ListTitle>
      <ItemContainer>
        {scheduleTime.map(({ startTime, endTime, id }) => (
          <CheckBox
            selected={selectedItem?.includes(id)}
            handleSelect={() => handleSelect(id)}
            startTime={startTime}
            endTime={endTime}
          />
        ))}
      </ItemContainer>
    </ListTimeContainer>
  );
};

export default ListTime;
