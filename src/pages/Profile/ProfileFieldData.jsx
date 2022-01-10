import React from "react";
import { Body, H4 } from "../../components/Typography";
import { ProfileFieldContainer } from "./styels";

const ProfileFieldData = ({ label, value }) => (
  <ProfileFieldContainer>
    <Body className="first-letter:capitalize text-black-40 ">{label}</Body>
    <H4 className="my-2.5 text-black-70">{value}</H4>
  </ProfileFieldContainer>
);

export default ProfileFieldData;
