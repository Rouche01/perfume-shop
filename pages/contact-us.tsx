import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Map from "../src/components/Map";
import { PageContainer, PageTitle } from "../src/generalStyles";

const ContactUs = () => {
  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury | Contact Us</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle>Contact Us</PageTitle>
      <Map
        location={{
          address: "Addo Road, Ajah, Lagos, Nigeria",
          lat: 6.466667,
          lng: 3.566667,
        }}
        zoomLvl={12}
      />
    </PageContainer>
  );
};

export default ContactUs;
