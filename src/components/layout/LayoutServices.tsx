import React from "react";
import Header from "../ui/Header";
import TopNavbar from "../ui/Navbar";
import CardServices from "../ui/CardServices";
import Footer from "../ui/Footer";

const LayoutServices: React.FC = () => {
  return (
    <>
      <TopNavbar />
      <Header  title="Nuestros Servicios"/>
      <CardServices />
      <Footer />
    </>
  );
};

export default LayoutServices;


