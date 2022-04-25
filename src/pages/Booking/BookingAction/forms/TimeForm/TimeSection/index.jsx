import React from "react";
import SelectTag from "../../../../../../components/SelectTag";
import { ChoiceContainer, ChoiceItem, Title, SectionContainer } from "./styles";

const TimeSection = ({ title, times, selected, onSelect }) => (
  <SectionContainer>
    <Title>{title}</Title>
    <ChoiceContainer>
      {times.map((time) => (
        <ChoiceItem key={time.start}>
          <SelectTag
            selected={selected.find((item) => item.id === time.id)}
            onSelect={() => onSelect(time)}
            content={`${time.start} - ${time.end}`}
          />
        </ChoiceItem>
      ))}
    </ChoiceContainer>
  </SectionContainer>
);

export default TimeSection;
