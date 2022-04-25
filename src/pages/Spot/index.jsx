import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import SpotCard from "../../components/SpotCard";
import useGET from "../../hooks/useGET";
import { Container } from "../../styles";
import { ListSpot } from "./styles";

const Spot = () => {
  const location = useLocation();
  const [token, setToken] = useState("");
  useEffect(() => {
    const retriveObj = localStorage.getItem("login_token");
    setToken(JSON.parse(retriveObj));
  }, []);

  const { data: spots, isFetching } = useGET({
    path: `/lokasi?id_lantai=${location.state.id}`,
    config: {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    },
  });

  if (isFetching) return <Loading />;

  return (
    <Container className="px-8 sm:px-8 md:px-16 lg:px-20 xl:px-24 flex flex-col items-center">
      <ListSpot>
        {spots.map((spot) => (
          <SpotCard
            key={spot.id_lokasi}
            spotId={spot.id_lokasi}
            name={spot.nama_lokasi}
            imgUrl={spot.gambar}
          />
        ))}
      </ListSpot>
    </Container>
  );
};

export default Spot;
