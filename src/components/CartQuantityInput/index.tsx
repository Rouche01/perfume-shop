import React, { FC } from "react";
import { Button, Container, Input } from "./styles";

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
