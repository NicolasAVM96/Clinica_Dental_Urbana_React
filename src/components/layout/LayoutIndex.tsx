import React from "react";
import IndexCarousel from "../ui/IndexCarousel";
import FuturedServices from "../ui/CardFuturedServices";
import WhyChooseUs from "../ui/WhyChooseUs";

const LayoutInicio: React.FC = () => {
  return (
    <>
      <IndexCarousel />
      <FuturedServices />
      <WhyChooseUs />
    </>
  );
};

export default LayoutInicio;
