import React from "react";
import ChairSection from "./ChairSection";

const ChairForm = () => {
  return (
    <div>
      <ChairSection
        title="At table AA"
        chairs={[
          { id: 1, name: "A1" },
          { id: 2, name: "A2" },
        ]}
      />
      <ChairSection
        title="At table BB"
        chairs={[
          { id: 1, name: "B1" },
          { id: 2, name: "B2" },
        ]}
      />
    </div>
  );
};

export default ChairForm;
