import React, { FC } from "react";
import Head from "next/head";
import AccountIndexPageView from "@/views/AccountIndexPageView";
import { PageContainer } from "@/components/shared";

const Account: FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury | Your Account</title>
        <meta name="description" content="Your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountIndexPageView />
    </PageContainer>
  );
};

export default Account;
