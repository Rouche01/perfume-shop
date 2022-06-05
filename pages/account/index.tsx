import React, { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import { PageContainer, PageTitle } from "../../src/generalStyles";
import Link from "next/link";
import { useRecentlyViewed } from "../../src/hooks/recentlyViewed";
import ProductBox from "../../src/components/ProductBox";
import { useCurrencyContext } from "../../src/utils/currencyProvider";
import { useCurrencyConverter } from "../../src/hooks/currency";
import { CustomProduct } from "../../src/types/product";

const AccountMenu = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-bottom: 70px;
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

const LineBreak = styled.hr`
  width: 100%;
  border: 1px solid #edeeee;
`;

const RecentlyViewedContainer = styled.div`
  margin-top: 45px;
  margin-bottom: 100px;
`;

const RecentlyViewTitle = styled.h2`
  font-size: 1.3rem;
  font-family: Jost;
  font-weight: 600;
`;

const RecentlyViewedList = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
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
  const { recentlyViewedProducts } = useRecentlyViewed();
  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  const router = useRouter();

  const onHandleProductClick = (product: CustomProduct) => {
    router.push(`/${product.slug}`);
  };

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
      <LineBreak />
      <RecentlyViewedContainer>
        <RecentlyViewTitle>Recently Viewed Products</RecentlyViewTitle>
        <RecentlyViewedList>
          {recentlyViewedProducts.map((product) => (
            <ProductBox
              isNew={true}
              originalPrice={formatPrice(product.originalPrice)}
              rating={4}
              salesPrice={formatPrice(product.salesPrice as number)}
              slug={product.slug}
              image={product.mainImage.data?.attributes?.url}
              key={product.slug}
              name={product.name}
              salesExist={product.onSales}
              sku={product.sku}
              handleProductClick={() => onHandleProductClick(product)}
            />
          ))}
        </RecentlyViewedList>
      </RecentlyViewedContainer>
    </PageContainer>
  );
};

export default Account;
