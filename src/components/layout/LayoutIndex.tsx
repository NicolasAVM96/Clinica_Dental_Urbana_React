import React from "react";
import IndexCarousel from "../ui/IndexCarousel";
import FuturedServices from "../ui/FuturedServices";
import WhyChooseUs from "../ui/WhyChooseUs";
import Footer from "../ui/Footer";

const LayoutInicio: React.FC = () => {
  return (
    <>
      <IndexCarousel />
      <FuturedServices />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default LayoutInicio;
