import styled from "styled-components";

export const LineButton = styled.button`
  font-size: 0.82rem;
  font-family: Jost;
  padding: 7px 0;
  margin-top: 28px;
  text-transform: uppercase;
  background-color: transparent;
  color: #000;
  border: none;
  border-bottom: 2px solid #000;
  transition: all 0.4s ease 0s;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #ab8e66;
    border-color: #ab8e66;
  }
`;
