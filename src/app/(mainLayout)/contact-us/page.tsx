"use client";

import React from "react";
import Container from "@/components/Reusable/Container/Container";
import ContactUsHero from "@/components/ContactUsPage/ContactUsHero/ContactUsHero";
import ContactUsForm from "@/components/ContactUsPage/ContactUsForm/ContactUsForm";

const ContactUs = () => {
  return (
    <>
      <ContactUsHero />
      <Container>
        <ContactUsForm />
      </Container>
    </>
  );
};

export default ContactUs;
