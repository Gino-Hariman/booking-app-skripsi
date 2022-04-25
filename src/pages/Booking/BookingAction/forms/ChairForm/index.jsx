import React, { useState } from "react";
import ChairSection from "./ChairSection";
import useGET from "../../../../../hooks/useGET";
import Loading from "../../../../../components/Loading";

const ChairForm = ({ values, onChange }) => {
  const [selectedChair, setSelectedChair] = useState();

  const { data: tables, isFetching } = useGET({
    path: `/table?id_lokasi=${values?.spotId}`,
  });

  const handleSelect = (chair) => {
    setSelectedChair(chair);
    onChange(chair);
  };

  if (isFetching) return <Loading />;

  return (
    <>
      {tables.map((table) => (
        <ChairSection
          title={`At table ${table.nama_meja}`}
          chairs={table?.kursi}
          selected={selectedChair}
          onSelect={handleSelect}
        />
      ))}
      {/* <ChairSection
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
      /> */}
    </>
  );
};

export default ChairForm;
