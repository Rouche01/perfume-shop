import styled from "styled-components";

type LabelProps = {
  labelSize?: number; // in rem
  labelColor?: string; // hex color
};

export const Container = styled.div``;

export const Label = styled.p<LabelProps>`
  margin: 0;
  padding: 0;
  font-size: ${({ labelSize }) => (labelSize ? `${labelSize}rem` : "0.9rem")};
  margin-bottom: 10px;
  color: ${({ labelColor }) => (labelColor ? labelColor : "#888")};
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  padding: 10px 20px;
  font-family: Jost;
  font-size: 0.9rem;
  &:focus {
    outline: none;
  }
`;
