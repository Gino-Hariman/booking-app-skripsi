import React, { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import { H1, H4 } from "../../components/Typography";
import { buildingOptions } from "../../Data/buildingOptions";
import img from "../../assets/image/bg_img.png";
import BackgroundImage from "../../components/BackgroundImage";
import { useNavigate } from "react-router-dom";
import useGET from "../../hooks/useGET";
import Loading from "../../components/Loading";

const HomePage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  // useEffect(() => {
  //   if (!localStorage.getItem("login_token")) return navigate("/login");
  // }, []);
  const { data, isFetching } = useGET({
    path: "/lantai",
    errorCallback: (err) => console.log("err", err),
  });
  // console.log(
  //   'localStorage.getItem("login_token")',
  //   localStorage.getItem("login_token")
  // );

  const a = localStorage.getItem("login_token");
  console.log("token", a);
  const handleSelect = (item) => {
    console.log("item", item);

    if (localStorage.getItem("login_token")) {
      console.log("masuk");
      // return navigate("/booking", { state: { selectedLocation: item } });
      return navigate("/spot", {
        state: {
          id: item.id_lantai,
        },
      });
    }
    return navigate("/login");
  };

  if (isFetching) return <Loading />;

  return (
    <BackgroundImage imgUrl={img}>
      <div className="flex flex-col items-center -mt-20 mx-10 md:mx-28 mb-2.5">
        <H1>BOOK your seat</H1>
        <H4 className="text-black-50 text-center break-words mb-12">
          Now available <span className="text-primary">15 seat</span> today at
          UPH Lippo Plaza, Book yours Now
        </H4>
        <Dropdown selected={selected} onSelect={handleSelect} options={data} />
      </div>
    </BackgroundImage>
  );
};

export default HomePage;
