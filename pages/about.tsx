import Head from "next/head";
import React, { FC } from "react";
import { PageContainer } from "@/components/shared";

import AboutPageView from "@/views/AboutPageView";

const About: FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury | About us</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutPageView />
    </PageContainer>
  );
};

export default About;
