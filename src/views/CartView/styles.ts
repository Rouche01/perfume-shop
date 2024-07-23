import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  border: 1px solid #f3f3f3;
  background-color: transparent;
  border-radius: 3px;
`;

export const CartTotalAndCoupon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 30px;
`;

export const TotalPriceLabel = styled.p`
  margin: 0;
  padding: 0;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
`;

export const PriceSpan = styled.span`
  font-size: 1.25rem;
`;

export const CartButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 100px;
`;
