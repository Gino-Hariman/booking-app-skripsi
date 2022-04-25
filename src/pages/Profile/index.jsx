import React, { useEffect, useState } from "react";
import { H1 } from "../../components/Typography";
import { ProfileContainer, ProfileDataGroup } from "./styels";
import ProfileFieldData from "./ProfileFieldData";
import useGET from "../../hooks/useGET";
import Loading from "../../components/Loading";

const Profile = () => {
  const [nim, setNim] = useState("");

  useEffect(() => {
    const retrieveToken = localStorage.getItem("login_token");
    setNim(JSON.parse(retrieveToken).nim);
  }, []);

  const { data, isFetching } = useGET({
    path: `/students/byEmail?email=${nim}`,
  });

  if (isFetching) return <Loading />;
  console.log("data", data[0]);

  return (
    <ProfileContainer>
      <>
        <H1 className="mb-20">Profile</H1>
        <ProfileDataGroup>
          {Object.entries(data[0]).map((entry) => {
            const [key, value] = entry;
            return <ProfileFieldData key={key} label={key} value={value} />;
          })}
        </ProfileDataGroup>
      </>
    </ProfileContainer>
  );
};

export default Profile;
