import React from "react";
import MapContact from "../ui/ContactMap";
import Header from "../ui/Header";
import ContactForm from "../ui/ContactForm";

const LayoutContact: React.FC = () => {
  return (
    <>
      <Header title="Contáctenos"/>
      <MapContact />
      <ContactForm />
    </>
  );
};

export default LayoutContact;
