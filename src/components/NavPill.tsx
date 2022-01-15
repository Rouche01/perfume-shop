import React, { FC } from "react";
import styled from "styled-components";

interface PillProps {
  active: boolean;
}

const Pill = styled.button<PillProps>`
  background-color: ${(props) => (props.active ? "#ab8e66" : "#000")};
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.125rem;
  color: #fff;
  cursor: pointer;
  padding: 10px 25px;
  border-radius: 99px;
  border: ${(props) => (props.active ? "1px solid #ab8e66" : "1px solid #000")};
  font-family: Jost;
`;

interface NavPillProps {
  title: string;
  active: boolean;
  clickFn: () => void;
}

const NavPill: FC<NavPillProps> = ({ title, clickFn, active }) => {
  return (
    <Pill active={active} onClick={clickFn}>
      {title}
    </Pill>
  );
};

export default NavPill;
