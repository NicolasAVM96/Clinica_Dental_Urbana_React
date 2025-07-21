import React from "react";
import IndexCarousel from "../ui/IndexCarousel";
import FuturedServices from "../ui/CardFuturedServices";
import WhyChooseUs from "../ui/WhyChooseUs";
import Footer from "../ui/Footer";
import TopNavbar from "../ui/Navbar";

const LayoutInicio: React.FC = () => {
  return (
    <>
      <TopNavbar />
      <IndexCarousel />
      <FuturedServices />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default LayoutInicio;
