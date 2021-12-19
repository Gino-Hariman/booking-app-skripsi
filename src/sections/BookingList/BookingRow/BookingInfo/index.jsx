import React from "react";
import Container from "./styles";
import CardIcon from "../../../../components/icons/Card";
import DateIcon from "../../../../components/icons/Date";
import StatisticIcon from "../../../../components/icons/Statistic";
import TimeIcon from "../../../../components/icons/Time";
import Info from "./Info";

const BookingInfo = ({ date, time, nim, studentClass }) => (
  <Container>
    <Info icon={<DateIcon />} text={date} />
    <Info icon={<TimeIcon />} text={time} />
    <Info icon={<CardIcon />} text={nim}/>
    <Info icon={<StatisticIcon />} text={studentClass} />
  </Container>
);

export default BookingInfo;
