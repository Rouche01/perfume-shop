import styled from "styled-components";

type LabelProps = {
  labelSize?: number; // in rem
  labelColor?: string; // hex color
};

export const InputContainer = styled.div``;

export const Label = styled.p<LabelProps>`
  margin: 0;
  padding: 0;
  font-size: ${({ labelSize }) => (labelSize ? `${labelSize}rem` : "0.9rem")};
  margin-bottom: 10px;
  color: ${({ labelColor }) => (labelColor ? labelColor : "#888")};
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 20px;
  padding: 10px 20px;
  border: 1px solid #eee;
  font-size: 0.9rem;
  font-family: Jost;
  &:focus {
    outline: none;
  }
`;

export const PasswordToggleIcon = styled.span`
  color: #888;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  right: 10px;
  cursor: default;
`;
