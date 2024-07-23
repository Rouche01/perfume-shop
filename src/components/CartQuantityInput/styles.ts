import styled from "styled-components";

export const Container = styled.div<{ rounded?: boolean }>`
  display: inline-flex;
  align-items: center;
  border: 1px solid #e9e9e9;
  border-radius: ${({ rounded }) => (rounded ? "99px" : 0)};
  padding: 8px 10px;
`;

export const Input = styled.input.attrs({ readonly: true })`
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

export const Button = styled.button`
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
