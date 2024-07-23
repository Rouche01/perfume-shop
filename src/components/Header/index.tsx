import React, { forwardRef, useMemo, useState } from "react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useCurrencyContext } from "@/utils/currencyProvider";
import { supportedCurrency } from "@/utils/dummyData";
import { CurrencyInfo } from "@/types/global";
import withClickOutside, {
  WrappedComponentProps,
} from "@/hoc/withClickOutside";
import { useCart } from "@/hooks/cart";
import { useAuth } from "@/hooks/auth";
import {
  TopBar,
  BottomBar,
  CounterSpan,
  CurrencyDropdown,
  CurrencyInput,
  CurrencyItem,
  CurrencyItemLink,
  CurrencyList,
  InnerSection,
  LinkGroup,
  LinkItem,
  Logo,
  MenuItem,
  MenuList,
  MidBar,
  MidBarInner,
  TopBarActions,
  TopBarBtn,
  TopBarLink,
  TopBarText,
} from "./styles";

const mainMenus: {
  name: string;
  link: string;
}[] = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "About", link: "/about" },
  { name: "Contact Us", link: "/contact-us" },
];

type Ref = HTMLDivElement;

const Header = forwardRef<Ref, WrappedComponentProps>(
  ({ open, setOpen }, ref) => {
    const [searchString, setSearchString] = useState<string | undefined>();
    const { currencyInfo, setCurrencyInfo } = useCurrencyContext();

    const { cartState } = useCart();
    const { authUser, modSignOut } = useAuth();

    const productQtyInCart = useMemo(
      () =>
        Object.values(cartState).reduce(
          (prev, curr) => Number(prev) + Number(curr),
          0
        ),
      [cartState]
    );

    const handleSearchBtn = () => {
      console.log(searchString);
    };

    const toggleCurrencyList = (
      ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      ev.preventDefault();
      setOpen(!open);
    };

    // console.log(open)

    const filteredSupportedCurrencies = supportedCurrency.filter(
      (currency) => currency.currencyCode !== currencyInfo.currencyCode
    );

    const selectGlobalCurrency = (
      ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      chosenCurrency: CurrencyInfo
    ) => {
      ev.preventDefault();
      setCurrencyInfo(chosenCurrency);
    };

    return (
      <>
        <TopBar>
          <InnerSection>
            <TopBarText>
              {authUser?.user?.id && `Hello ${authUser.user.firstName}, `}
              Welcome to our online store!
            </TopBarText>
            <TopBarActions>
              <CurrencyDropdown ref={ref} className="currency-dropdown">
                <CurrencyInput
                  onClick={(ev) => toggleCurrencyList(ev)}
                  href="#"
                  data-currency="currency-dropdown"
                >
                  {currencyInfo.currencyCode}{" "}
                  <MdKeyboardArrowDown
                    style={{ marginLeft: "4px" }}
                    size={20}
                  />
                </CurrencyInput>
                <CurrencyList show={open}>
                  {filteredSupportedCurrencies.map(
                    ({ currencyCode, locale }) => (
                      <CurrencyItem key={currencyCode}>
                        <CurrencyItemLink
                          onClick={(ev) =>
                            selectGlobalCurrency(ev, { currencyCode, locale })
                          }
                          href="#"
                        >
                          {currencyCode}
                        </CurrencyItemLink>
                      </CurrencyItem>
                    )
                  )}
                </CurrencyList>
              </CurrencyDropdown>
              <span>|</span>
              {!authUser?.user?.id ? (
                <TopBarLink href="/auth/login">
                  <a style={{ color: "#000" }}>Login or Register</a>
                </TopBarLink>
              ) : (
                <TopBarBtn onClick={modSignOut}>Logout</TopBarBtn>
              )}
            </TopBarActions>
          </InnerSection>
        </TopBar>
        <MidBar>
          <MidBarInner>
            <SearchBar
              searchValue={searchString}
              setSearchValue={setSearchString}
              searchBtnFunc={handleSearchBtn}
            />
            <Logo>Peace Luxury</Logo>
            <LinkGroup>
              <LinkItem href="/cart">
                <a style={{ position: "relative" }}>
                  <CgShoppingCart size={28} color="#555555" />
                  <CounterSpan>{productQtyInCart}</CounterSpan>
                </a>
              </LinkItem>
              <LinkItem href="wishlist">
                <a style={{ position: "relative" }}>
                  <FiHeart size={26} color="#555" />
                  <CounterSpan>0</CounterSpan>
                </a>
              </LinkItem>
              <LinkItem href="/account">
                <a>
                  <AiOutlineUser size={28} color="#555555" />
                </a>
              </LinkItem>
            </LinkGroup>
          </MidBarInner>
        </MidBar>
        <BottomBar>
          <InnerSection>
            <MenuList>
              {mainMenus.map(({ name, link }) => (
                <Link href={link} key={link}>
                  <a>
                    <MenuItem>{name}</MenuItem>
                  </a>
                </Link>
              ))}
            </MenuList>
          </InnerSection>
        </BottomBar>
      </>
    );
  }
);

Header.displayName = "Header";

export default withClickOutside(Header);
