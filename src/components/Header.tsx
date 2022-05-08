import React, { FC, forwardRef, useMemo, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useCurrencyContext } from "../utils/currencyProvider";
import { supportedCurrency } from "../utils/dummyData";
import { CurrencyInfo } from "../types/global";
import withClickOutside, {
  WrappedComponentProps,
} from "../hoc/withClickOutside";
import { useCart } from "../hooks/cart";

interface CurrencyListProps {
  show: boolean;
}

const TopBar = styled.div`
  background: #f3f3f3;
  width: 100%;
  padding: 20px 0;
`;

const InnerSection = styled.div`
  max-width: 1280px;
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MidBarInner = styled.div`
  max-width: 1280px;
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

const TopBarText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: #000;
`;

const TopBarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TopBarLink = styled(Link)`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: #000;
`;

const CurrencyDropdown = styled.div`
  position: relative;
`;

const CurrencyInput = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

const CurrencyList = styled.ul<CurrencyListProps>`
  position: absolute;
  background-color: #fff;
  padding: 0;
  transition: 0.35s;
  text-align: left;
  transform: translateY(10px);
  box-shadow: 0px 0px 12px 0px rgb(0 0 0 / 16%);
  min-width: 125px;
  z-index: 200;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const CurrencyItem = styled.li`
  list-style: none;
`;

const CurrencyItemLink = styled.a`
  font-size: 1rem;
  color: #888;
  padding: 11px 20px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
    color: #ab8e66;
  }
`;

const MidBar = styled.div`
  color: #fff;
  padding: 20px 0;
  width: 100%;
`;

const Logo = styled.h2`
  color: #ab8e66;
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 40px;
  font-family: Neonderthaw;
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: auto;
`;

const LinkItem = styled(Link)`
  position: relative;
`;

const CounterSpan = styled.span`
  background-color: #ab8e66;
  position: absolute;
  width: 20px;
  height: 20px;
  text-align: center;
  display: inline-block;
  font-size: 0.75rem;
  border-radius: 100%;
  left: 20px;
  top: -8px;
  line-height: 20px;
`;

const BottomBar = styled.div`
  padding: 18px 0;
  width: 100%;
  background-color: #aa8e66;
`;

const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  padding: 7px 0;
  width: 100%;
`;

const MenuItem = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
`;

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
            <TopBarText>Welcome to our online store!</TopBarText>
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
              <TopBarLink href="/auth/login">
                <a style={{ color: "#000" }}>Login or Register</a>
              </TopBarLink>
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
              <LinkItem href="/profile">
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
