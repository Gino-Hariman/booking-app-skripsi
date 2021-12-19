import React from "react";
import BookingContainer from "./styles";
import LocationPreview from "./LocationPreview";
import BookingAction from "./BookingAction";

const Booking = () => (
  <BookingContainer>
    <LocationPreview
      locationImg="https://source.unsplash.com/3b2tADGAWnU/1600x900"
      locationName="Aryaduta Lounge A1"
      availableSeats={10}
    />
    <BookingAction />
  </BookingContainer>
);

export default Booking;
