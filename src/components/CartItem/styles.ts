import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #f3f3f3;
  padding: 30px;
  display: grid;
  grid-template-columns: 0.75fr 2fr 1fr 1fr 0.25fr;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const ProductMeta = styled.div``;

export const ProductName = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  color: #333;
`;

export const ProductDesc = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #888;
`;

export const ProductPrice = styled.h4`
  margin: 0;
  padding: 0;
  color: #111;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const RemoveItem = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: #aaa;
  &:hover {
    color: #ab8e66;
  }
`;

export const RemoveItemIcon = styled.span.attrs({
  className: "material-icons material-icons-outlined md-24",
})`
  &:after {
    font-family: "Material Icons";
    content: "delete_outline";
  }
`;
