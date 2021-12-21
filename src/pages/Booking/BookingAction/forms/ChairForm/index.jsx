import React, { useState } from "react";
import ChairSection from "./ChairSection";

const ChairForm = ({ onChange }) => {
  const [selectedChair, setSelectedChair] = useState();

  const handleSelect = (chair) => {
    setSelectedChair(chair);
    onChange(chair);
  };

  console.log(selectedChair, selectedChair);

  return (
    <>
      <ChairSection
        title="At table AA"
        chairs={[
          { id: 1, name: "A1" },
          { id: 2, name: "A2" },
        ]}
        selected={selectedChair}
        onSelect={handleSelect}
      />
      <ChairSection
        title="At table BB"
        chairs={[
          { id: 1, name: "B1" },
          { id: 2, name: "B2" },
        ]}
        selected={selectedChair}
        onSelect={handleSelect}
      />
    </>
  );
};

export default ChairForm;
