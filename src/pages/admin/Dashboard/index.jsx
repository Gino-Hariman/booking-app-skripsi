import React from "react";
import Header from "../../../components/Header";
import BookingOverview from "../../../sections/BookingOverview";
import BookingList from "../../../sections/BookingList";
import Content from "./styles";

const Dashboard = () => (
  <div>
    <Header title="Overview" />
    <Content>
      <BookingOverview />
      <div className="pt-5">
        <BookingList />
      </div>
    </Content>
  </div>
);

export default Dashboard;
