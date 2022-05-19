import React, { FC } from "react";
import Head from "next/head";
import styled from "styled-components";
import { PageContainer, PageTitle } from "../../src/generalStyles";
import Link from "next/link";

const AccountMenu = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-bottom: 80px;
`;

const MenuItem = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d5d9d9;
  cursor: pointer;
  padding: 16px 18px;
  display: flex;
  align-items: flex-start;
  gap: 25px;
  &:hover {
    background-color: #eee;
  }
`;

const MenuIconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f0e3d0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuIcon = styled.span.attrs({
  className: "material-icons material-icons-two-tone md-36",
})`
  color: #c400008b;
`;

const MenuTextGrp = styled.div``;

const MenuTitle = styled.h2`
  font-size: 1.15rem;
  color: #111;
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

const MenuSubtitle = styled.p`
  margin: 0;
  padding: 0;
  color: #565959;
  margin-top: 4px;
`;

const accountMenus = [
  {
    title: "My Orders",
    subtitle: "See order history, track or buy things again",
    icon: "content_paste_search",
    path: "/account/myorders",
  },
  {
    title: "Login & Security",
    subtitle: "Edit password, name and mobile number",
    icon: "admin_panel_settings",
    path: "/account/accountinfo",
  },
  {
    title: "My Addresses",
    subtitle: "Edit addresses and add new address",
    icon: "home",
    path: "/account/myaddresses",
  },
  {
    title: "My Payments",
    subtitle: "Manage payment methods and settings",
    icon: "account_balance_wallet",
    path: "/account/mypayments",
  },
  {
    title: "My Wishlist",
    subtitle: "Saved items for future purchases",
    icon: "favorite",
    path: "/account/saveditems",
  },
];

const Account: FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury | Your Account</title>
        <meta name="description" content="Your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle>My Account</PageTitle>
      <AccountMenu>
        {accountMenus.map((menu) => (
          <Link key={menu.path} href={menu.path} passHref>
            <MenuItem>
              <MenuIconContainer>
                <MenuIcon>{menu.icon}</MenuIcon>
              </MenuIconContainer>
              <MenuTextGrp>
                <MenuTitle>{menu.title}</MenuTitle>
                <MenuSubtitle>{menu.subtitle}</MenuSubtitle>
              </MenuTextGrp>
            </MenuItem>
          </Link>
        ))}
      </AccountMenu>
    </PageContainer>
  );
};

export default Account;
