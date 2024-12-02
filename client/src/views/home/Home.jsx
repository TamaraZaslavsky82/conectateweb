import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchSection from "./SearchSection/SearchSection";
import MunicipalidadSection from "./MunicipalidadSection/MunicipalidadSection";
import DestacadosSection from "./DestacadosSection/DestacadosSection";
import InformationSection from "./InformationSection/InformationSection";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen py-6 mobile:py-4 tablet:py-6 desktop:py-8">
      {/* Navbar */}
      <Navbar />

      {/* Search Section */}
      <SearchSection />

      {/* Municipalidad Section */}
      <MunicipalidadSection />

      <DestacadosSection />

      {/* Information Section */}
      <InformationSection />
      {/* footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
