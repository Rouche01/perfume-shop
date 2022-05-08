import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div<{ rounded?: boolean }>`
  display: inline-flex;
  align-items: center;
  border: 1px solid #e9e9e9;
  border-radius: ${({ rounded }) => (rounded ? "99px" : 0)};
  padding: 8px 10px;
`;

const Input = styled.input.attrs({ readonly: true })`
  border: none;
  background-color: transparent;
  width: 30px;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  cursor: default;
  &:focus {
    border: none;
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  color: #d9d9d9;
  &:hover {
    color: #ab8e66;
  }
`;

interface CartQuantityInputProps {
  quantity?: number;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
  rounded?: boolean;
  productSku: string;
  onAdd?: (productSku: string) => void;
  onRemove?: (productSku: string) => void;
}

const CartQuantityInput: FC<CartQuantityInputProps> = ({
  quantity,
  rounded,
  productSku,
  setQuantity,
  onAdd,
  onRemove,
}) => {
  return (
    <Container rounded={rounded}>
      <Button
        onClick={() => {
          console.log("decrease");
          if (onRemove) {
            onRemove(productSku);
          } else {
            quantity &&
              quantity > 0 &&
              setQuantity &&
              setQuantity(quantity - 1);
          }
        }}
      >
        -
      </Button>
      <Input value={quantity} readOnly />
      <Button
        onClick={() =>
          onAdd ? onAdd(productSku) : setQuantity && setQuantity(quantity! + 1)
        }
      >
        +
      </Button>
    </Container>
  );
};

export default CartQuantityInput;
