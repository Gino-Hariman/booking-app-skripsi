import React from "react";
import SelectTag from "../../../../../../components/SelectTag";
import { H5 } from "../../../../../../components/Typography";
import {
  ChairChoiceContainer,
  ChairChoiceItem,
  ChairSectionContainer,
} from "./styles";

const ChairSection = ({ title, chairs, selected, onSelect }) => (
  <ChairSectionContainer>
    <H5>{title}</H5>
    <ChairChoiceContainer>
      {chairs.map((chair) => (
        <ChairChoiceItem key={chair.id_kursi}>
          <SelectTag
            selected={selected?.nama_kursi === chair.nama_kursi}
            onSelect={() => onSelect(chair)}
            content={chair?.nama_kursi}
          />
        </ChairChoiceItem>
      ))}
    </ChairChoiceContainer>
  </ChairSectionContainer>
);

export default ChairSection;
