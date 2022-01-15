import React, { FC, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";

const TopBar = styled.div`
  background: #aa8e66;
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

const TopBarText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: #fff;
`;

const TopBarLink = styled(Link)`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: #fff;
`;

const MidBar = styled.div`
  color: #fff;
  padding: 30px 0;
  width: 100%;
`;

const Logo = styled.h2`
  color: black;
  padding: 0;
  margin: 0;
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
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
  background-color: #f3f3f3;
`;

const MenuList = styled.div`
  display: flex;
  align-items: center;
  gap: 54px;
  padding: 7px 0;
`;

const MenuItem = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
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

const Header: FC = () => {
  const [searchString, setSearchString] = useState<string | undefined>();

  const handleSearchBtn = () => {
    console.log(searchString);
  };

  return (
    <>
      <TopBar>
        <InnerSection>
          <TopBarText>Welcome to our online store!</TopBarText>
          <TopBarLink href="/login">
            <a style={{ color: "#fff" }}>Login or Register</a>
          </TopBarLink>
        </InnerSection>
      </TopBar>
      <MidBar>
        <InnerSection>
          <Logo>Peace Luxury</Logo>
          <SearchBar
            searchValue={searchString}
            setSearchValue={setSearchString}
            searchBtnFunc={handleSearchBtn}
          />
          <LinkGroup>
            <LinkItem href="/cart">
              <a style={{ position: "relative" }}>
                <CgShoppingCart size={28} color="#555555" />
                <CounterSpan>0</CounterSpan>
              </a>
            </LinkItem>
            <LinkItem href="/profile">
              <a>
                <AiOutlineUser size={28} color="#555555" />
              </a>
            </LinkItem>
          </LinkGroup>
        </InnerSection>
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
};

export default Header;
