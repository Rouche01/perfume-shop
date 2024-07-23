import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { PageContainer } from "@/components/shared";
import HomePageView from "@/views/HomePageView";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageView />
    </PageContainer>
  );
};

export default Home;
