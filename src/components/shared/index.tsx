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

export const PageContainer = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export const PageTitle = styled.h2`
  font-size: 1.25rem;
  font-family: Jost;
  margin: 30px 0 40px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const ErrorText = styled.p`
  margin: 0;
  padding: 0;
  color: #f20;
  font-size: 0.8rem;
  margin-top: 5px;
`;

interface FormRowProps {
  columns: 1 | 2;
  mt?: number;
}

export const FormRow = styled.div<FormRowProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 1 ? "1fr" : "1fr 1fr"};
  gap: 25px;
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : 0)};
`;
