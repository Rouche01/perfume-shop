import { PageTitle } from "@/components/shared";
import { FC } from "react";
import Link from "next/link";

import {
  AccountMenu,
  MenuItem,
  LineBreak,
  MenuIcon,
  MenuIconContainer,
  MenuSubtitle,
  MenuTextGrp,
  MenuTitle,
  RecentlyViewTitle,
  RecentlyViewedContainer,
  RecentlyViewedList,
} from "./styles";
import { useRecentlyViewed } from "@/hooks/recentlyViewed";
import { useCurrencyContext } from "@/utils/currencyProvider";
import { useCurrencyConverter } from "@/hooks/currency";
import { useRouter } from "next/router";
import { CustomProduct } from "@/types/product";
import ProductBox from "@/components/ProductBox";

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

const AccountIndexPageView: FC = () => {
  const { recentlyViewedProducts } = useRecentlyViewed();
  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  const router = useRouter();

  const onHandleProductClick = (product: CustomProduct) => {
    router.push(`/${product.slug}`);
  };

  return (
    <>
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
    </>
  );
};

export default AccountIndexPageView;
