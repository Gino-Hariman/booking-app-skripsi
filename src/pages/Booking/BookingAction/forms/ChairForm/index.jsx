import React, { useState, useEffect } from "react";
import ChairSection from "./ChairSection";
import useGET from "../../../../../hooks/useGET";
import Loading from "../../../../../components/Loading";
import { SubTitle } from "./styles";

const ChairForm = ({ values, onChange }) => {
  const [selectedChair, setSelectedChair] = useState();
  const [step, setStep] = useState(values.time.length - 1);
  const [currentStep, setCurrentStep] = useState(0);
  const [time, setTime] = useState(Object.keys(values.time[currentStep])[1]);

  useEffect(() => {
    setStep(values.time.length);
    setTime(Object.keys(values.time[currentStep])[1]);
  }, [currentStep]);

  const { data: tables, isFetching } = useGET({
    path: `/table?id_lokasi=${values?.spotId}`,
  });
  console.log("values chair", values.time);
  console.log("values test", values.time[currentStep][time]);

  const handleSelect = (chair) => {
    setSelectedChair(chair);
    onChange(chair);
  };

  if (isFetching) return <Loading />;

  return (
    <>
      <SubTitle>{time}</SubTitle>
      {tables?.map((table) => (
        <ChairSection
          key={table?.kursi.id}
          title={`At table ${table.nama_meja}`}
          chairs={table?.kursi}
          selected={selectedChair}
          onSelect={handleSelect}
        />
      ))}
      {/* {values.time[currentStep][time].map((data) => (
        <ChairSection
          key={table?.kursi.id}
          title={`At table ${table.nama_meja}`}
          chairs={data}
          selected={selectedChair}
          onSelect={handleSelect}
        />
      ))} */}
      {/* {currentStep <= step &&
      console.log('test',Object.keys(values.time[currentStep]))} */}
      {/* <ChairSection
        key={table?.kursi.id}
        title={`At table ${table.nama_meja}`}
        chairs={table?.kursi}
        selected={selectedChair}
        onSelect={handleSelect}
      /> */}
      {/* {tables.map((table) => (
        <ChairSection
          key={table?.kursi.id}
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
