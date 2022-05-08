import React, { FC } from "react";
import styled from "styled-components";
import InputWithInlineBtn from "./InputWithInlineBtn";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin: 0;
  padding: 0;
  color: #333;
  font-size: 1.03rem;
  font-weight: 500;
  margin-right: 8px;
`;

interface CouponFormProps {
  couponCode: string;
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
}

const CouponForm: FC<CouponFormProps> = ({ couponCode, setCouponCode }) => {
  return (
    <Container>
      <Label>Coupon Code:</Label>
      <InputWithInlineBtn
        value={couponCode}
        setValue={setCouponCode}
        width={250}
        placeholder="Promotion code here"
      />
    </Container>
  );
};

export default CouponForm;
