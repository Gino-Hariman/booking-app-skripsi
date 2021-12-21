import React from "react";
import BookingContainer from "./styles";
import LocationPreview from "./LocationPreview";
import BookingAction from "./BookingAction";

const Booking = () => (
  <div className="w-full h-full min-h-screen flex flex-row sm:flex-col justify-center">
    <BookingContainer>
      <LocationPreview
        locationImg="https://source.unsplash.com/3b2tADGAWnU/1600x900"
        locationName="Aryaduta Lounge A1"
        availableSeats={10}
      />
      <BookingAction />
    </BookingContainer>
  </div>
);

export default Booking;
