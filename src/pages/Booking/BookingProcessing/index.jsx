import React from "react";
import BackgroundImage from "../../../components/BackgroundImage";
import img from "../../../assets/image/bg_img.png";
import pinImg from "../../../assets/image/pin.png";
import { Container } from "../../../styles";
import { H1, H4 } from "../../../components/Typography";

const BookingProcessing = () => {
  return (
    <Container className="item-center justify-center">
      <BackgroundImage imgUrl={img}>
        <H1 className="text-black-90 font-bold">
          Your Booking Is On Processing
        </H1>
        <H4 className="my-4 text-black-50">
          Please kindly wait, we will notify you as soon as possible
        </H4>
        <img className="w-12 h-12" src={pinImg} alt="pin-img" />
      </BackgroundImage>
    </Container>
  );
};

export default BookingProcessing;
