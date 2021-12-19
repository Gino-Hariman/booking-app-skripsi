import React from "react";
import { H1 } from "../../components/Typography";
import { ProfileContainer, ProfileDataGroup } from "./styels";
import ProfileFieldData from "./ProfileFieldData";

const Profile = () => {
  const dummyData = {
    nim: "03082180013",
    nama: "Mario Chandra",
    kelas: "18TI2",
    email: "mariochandra01@gmail.com",
    prodi: "informatika",
  };
  const renderItem = () => {
    Object.entries(dummyData).map((entry) => {
      const [key, value] = entry;
      return <ProfileFieldData key={key} label={key} value={value} />;
    });
  };
  return (
    <ProfileContainer>
      <>
        <H1 className="mb-20">Profile</H1>
        <ProfileDataGroup>
          {Object.entries(dummyData).map((entry) => {
            const [key, value] = entry;
            return <ProfileFieldData key={key} label={key} value={value} />;
          })}
        </ProfileDataGroup>
      </>
    </ProfileContainer>
  );
};

export default Profile;
