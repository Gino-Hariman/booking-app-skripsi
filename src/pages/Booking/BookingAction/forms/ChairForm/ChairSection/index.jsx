import React from "react";
import SelectTag from "../../../../../../components/SelectTag";
import { H3 } from "../../../../../../components/Typography";
import {
  ChairChoiceContainer,
  ChairChoiceItem,
  ChairSectionContainer,
} from "./styles";

const ChairSection = ({ title, chairs, selected, onSelect }) => (
  <ChairSectionContainer>
    <H3>{title}</H3>
    <ChairChoiceContainer>
      {chairs.map((chair) => (
        <ChairChoiceItem key={chair.id}>
          <SelectTag
            selected={selected.name === chair.name}
            onSelect={() => onSelect(chair)}
            content={chair.name}
          />
        </ChairChoiceItem>
      ))}
    </ChairChoiceContainer>
  </ChairSectionContainer>
);

export default ChairSection;
