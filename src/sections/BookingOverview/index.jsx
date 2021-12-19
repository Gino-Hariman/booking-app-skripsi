import React from "react";
import BoxInfo from "../../components/BoxInfo";
import { OverviewContainer, Item } from "./styles";

const BookingOverview = () => (
  <OverviewContainer>
    <Item>
      <BoxInfo label="Request" info="174" icon="info" />
    </Item>
    <Item>
      <BoxInfo label="Pending" info="74" icon="warning" />
    </Item>
    <Item>
      <BoxInfo label="Accepted" info="100" icon="success" />
    </Item>
    <Item>
      <BoxInfo label="Rejected" info="90" icon="danger" />
    </Item>
  </OverviewContainer>
);

export default BookingOverview;
