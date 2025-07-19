import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import NewFeatures from "./NewFeatures";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <NewFeatures/>
      {/* <SpecialityMenu/> */}
      <TopDoctors/>
      {/* <Banner/> */}
      <Footer/>
    </div>
  );
};

export default Home;
