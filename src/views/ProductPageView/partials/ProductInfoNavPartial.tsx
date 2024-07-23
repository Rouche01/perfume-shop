import { ProductInfoNavBarMenuList } from "@/types/product";
import { FC } from "react";
import { InfoNavBar, InfoNavBarItem } from "../styles";

interface Props {
  activeMenu: string;
  setActiveMenu: (menuId: string) => void;
  menuList: ProductInfoNavBarMenuList[];
}

const ProductInfoNavPartial: FC<Props> = ({
  activeMenu,
  setActiveMenu,
  menuList,
}) => {
  return (
    <InfoNavBar>
      {menuList.map(({ id, name }) => (
        <InfoNavBarItem
          onClick={() => setActiveMenu(id)}
          key={id}
          active={activeMenu === id}
        >
          {name}
        </InfoNavBarItem>
      ))}
    </InfoNavBar>
  );
};

export default ProductInfoNavPartial;
