import styled from "styled-components";

type GalleryImageProps = {
  selected: boolean;
};

type PriceInfoProps = {
  salesExist?: boolean;
};

type InfoNavBarItemProps = {
  active?: boolean;
};

export const ProductRootContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const ProductGallery = styled.div`
  width: 100%;
  padding-right: 70px;
`;

export const ProductImageGallery = styled.div`
  margin-top: 10px;
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

export const ProductMainImage = styled.img`
  width: 100%;
  max-height: 550px;
  object-fit: cover;
  object-position: top;
`;

export const GalleryImage = styled.img<GalleryImageProps>`
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  object-position: top;
  cursor: pointer;
  border: 1px solid ${(props) => (props.selected ? "#ab8e66" : "#eee")};
`;

export const ProductMeta = styled.div`
  width: 100%;
`;

export const ProductName = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.65rem;
  margin-bottom: 14px;
  color: #333;
  font-weight: 500;
`;

export const InventoryData = styled.p`
  margin: 0;
  padding: 0;
  color: #555;
  margin-top: 14px;
  font-size: 0.9rem;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 14px;
`;

export const PriceInfo = styled.h3<PriceInfoProps>`
  margin: 0;
  padding: 0;
  color: ${(props) => (props.salesExist ? "#aaa" : "#333")};
  text-decoration: ${(props) => (props.salesExist ? "line-through" : "none")};
  font-size: 1.4rem;
  font-weight: 500;
`;

export const SalesPrice = styled.h3`
  margin: 0;
  padding: 0;
  color: #333;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const ProductDesc = styled.p`
  color: #555;
  font-size: 1rem;
  margin-top: 15px;
`;

export const AddToCartSection = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 20px;
`;

export const AddToWishlist = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
  color: #555;
  font-size: 0.95rem;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #ab8e66;
  }
`;

export const WishlistIcon = styled.span.attrs({
  className: "material-icons material-icons-outlined md-24",
})`
  color: #ccc;
  &:after {
    font-family: "Material Icons";
    content: "favorite_border";
  }
  ${AddToWishlist}:hover & {
    color: #ab8e66;
    &:after {
      font-family: "Material Icons";
      content: "favorite";
    }
  }
`;

export const ProductInfoAndReview = styled.div`
  margin-top: 60px;
`;

export const InfoNavBar = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  padding-inline-start: 0;
  border-bottom: 1px solid #e6e6e6;
`;

export const InfoNavBarItem = styled.li<InfoNavBarItemProps>`
  color: ${(props) => (props.active ? "#ab8e66" : "#bbb")};
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  padding: 8px 0;
  border-bottom: 3px solid;
  border-color: ${(props) => (props.active ? "#ab8e66" : "transparent")};
`;

export const NavbarContent = styled.div`
  padding: 8px 0 120px;
`;

export const AdditionalInfoTab = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const ReviewCount = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 20px 0;
`;

export const SpinnerContainer = styled.div`
  padding: 35px 0;
`;
