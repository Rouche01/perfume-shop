import styled from "styled-components";

export const AccountMenu = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-bottom: 70px;
`;

export const MenuItem = styled.div`
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

export const LineBreak = styled.hr`
  width: 100%;
  border: 1px solid #edeeee;
`;

export const RecentlyViewedContainer = styled.div`
  margin-top: 45px;
  margin-bottom: 100px;
`;

export const RecentlyViewTitle = styled.h2`
  font-size: 1.3rem;
  font-family: Jost;
  font-weight: 600;
`;

export const RecentlyViewedList = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
`;

export const MenuIconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f0e3d0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuIcon = styled.span.attrs({
  className: "material-icons material-icons-two-tone md-36",
})`
  color: #c400008b;
`;

export const MenuTextGrp = styled.div``;

export const MenuTitle = styled.h2`
  font-size: 1.15rem;
  color: #111;
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

export const MenuSubtitle = styled.p`
  margin: 0;
  padding: 0;
  color: #565959;
  margin-top: 4px;
`;
