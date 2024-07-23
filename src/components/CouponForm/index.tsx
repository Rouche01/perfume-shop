import React, { FC } from "react";
import InputWithInlineBtn from "@/components/InputWithInlineBtn";
import { Container, Label } from "./styles";

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
