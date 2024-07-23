import styled from "styled-components";

interface FeatureProps {
  mode: "light" | "dark";
}

export const Container = styled.div<FeatureProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: ${(props) => (props.mode === "light" ? "80px" : 0)};
`;

export const FeatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const FeatureTitle = styled.h3<FeatureProps>`
  text-transform: uppercase;
  color: ${(props) => (props.mode === "dark" ? "#fff" : "#222")};
  font-size: 0.95rem;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const FeatureBody = styled.p<FeatureProps>`
  margin: 0;
  padding: 0;
  color: ${(props) => (props.mode === "dark" ? "#fff" : "#888")};
  font-size: 0.95rem;
`;
