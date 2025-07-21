import React from "react";
import TopNavbar from "../ui/Navbar";
import Header from "../ui/Header";
import AboutUs from "../ui/TextAboutUs";
import Footer from "../ui/Footer";

const LayoutAboutUs: React.FC = () => {
  return (
    <>
      <TopNavbar />
      <Header  title="Clinica Dental Urbana"/>
      <AboutUs/>
      <Footer />
    </>
  );
};

export default LayoutAboutUs;


