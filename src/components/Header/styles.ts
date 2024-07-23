import Link from "next/link";
import styled from "styled-components";

interface CurrencyListProps {
  show: boolean;
}

export const TopBar = styled.div`
  background: #f3f3f3;
  width: 100%;
  padding: 20px 0;
`;

export const InnerSection = styled.div`
  max-width: 1280px;
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MidBarInner = styled.div`
  max-width: 1280px;
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

export const TopBarText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: #000;
`;

export const TopBarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TopBarLink = styled(Link)`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: #000;
`;

export const TopBarBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #000;
  &:active {
    outline: none;
    border: none;
  }
`;

export const CurrencyDropdown = styled.div`
  position: relative;
`;

export const CurrencyInput = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

export const CurrencyList = styled.ul<CurrencyListProps>`
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

export const CurrencyItem = styled.li`
  list-style: none;
`;

export const CurrencyItemLink = styled.a`
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

export const MidBar = styled.div`
  color: #fff;
  padding: 20px 0;
  width: 100%;
`;

export const Logo = styled.h2`
  color: #ab8e66;
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 40px;
  font-family: Neonderthaw;
`;

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: auto;
`;

export const LinkItem = styled(Link)`
  position: relative;
`;

export const CounterSpan = styled.span`
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

export const BottomBar = styled.div`
  padding: 18px 0;
  width: 100%;
  background-color: #aa8e66;
`;

export const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  padding: 7px 0;
  width: 100%;
`;

export const MenuItem = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
`;
