import React from "react";
import SelectTag from "../../../../../../components/SelectTag";
import { ChoiceContainer, ChoiceItem, Title, SectionContainer } from "./styles";

const TimeSection = ({ title, times, selected, onSelect }) => (
  <SectionContainer>
    <Title>{title}</Title>
    {/* <ChoiceContainer>
      {times.map((time) => (
        <ChoiceItem key={time.id}>
          <SelectTag
            selected={selected.find((item) => item.id === time.id)}
            onSelect={() => onSelect(time)}
            content={`${time.start} - ${time.end}`}
          />
        </ChoiceItem>
      ))}
    </ChoiceContainer> */}
    <ChoiceContainer>
      {/* {times.map((time) => {
        const objTimes = Object.keys(time);
        if (Object.keys(time[objTimes[1]]).length === 0) {
          return (
            <ChoiceItem key={time.id}>
              <SelectTag disabled content={objTimes[1]} />
            </ChoiceItem>
          );
        }
        return (
          <ChoiceItem key={time.id}>
            <SelectTag
              selected={selected.find((item) => item.id === time.id)}
              onSelect={() => onSelect(time)}
              content={objTimes[1]}
            />
          </ChoiceItem>
        );
      })} */}
      {times.map((time) => {
        const objTimes = Object.keys(time);
        if (Object.keys(time[objTimes[1]]).length === 0) {
          return (
            <ChoiceItem key={time.id}>
              <SelectTag disabled content={objTimes[1]} />
            </ChoiceItem>
          );
        }
        return (
          <ChoiceItem key={time.id}>
            <SelectTag
              selected={selected.find((item) => item.id === time.id)}
              onSelect={() => onSelect(time)}
              content={objTimes[1]}
            />
          </ChoiceItem>
        );
      })}
    </ChoiceContainer>
  </SectionContainer>
);

export default TimeSection;
