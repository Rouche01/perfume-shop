import styled from "styled-components";

interface RoundedBtnProps {
  fullwidth?: boolean;
  bgColor: string;
  hoverBgColor?: string;
  hoverColor?: string;
  color?: string;
  borderColor?: string;
  size?: "small" | "large";
}

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

export const RoundedButton = styled.button<RoundedBtnProps>`
  font-size: ${(props) => (props.size === "small" ? "0.82rem" : "0.875rem")};
  padding: ${(props) => (props.size === "small" ? "12px 24px" : "14px 32px")};
  text-transform: uppercase;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
  border: ${(props) => {
    return props.borderColor
      ? `1px solid ${props.borderColor}`
      : `1px solid ${props.bgColor}`;
  }};
  color: ${(props) => props.color || "#fff"};
  font-weight: 600;
  cursor: pointer;
  font-family: Jost;
  width: ${(props) => (props.fullwidth ? "100%" : null)};
  &:hover {
    background-color: ${(props) => props.hoverBgColor || props.bgColor};
    color: ${(props) => props.hoverColor || props.color || "#fff"};
  }
`;
