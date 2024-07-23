import React, { FC } from "react";
import { Pill } from "./styles";

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
