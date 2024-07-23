import Head from "next/head";
import React from "react";
import { PageContainer } from "@/components/shared";
import ContactUsPageView from "@/views/ContactUsPageView";

const ContactUs = () => {
  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury | Contact Us</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactUsPageView />
    </PageContainer>
  );
};

export default ContactUs;
