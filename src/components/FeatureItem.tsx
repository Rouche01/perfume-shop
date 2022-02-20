import React, { FC } from "react";
import styled from "styled-components";
import { ShopFeature } from "../types/home";

interface FeatureProps {
  mode: "light" | "dark";
}

const Container = styled.div<FeatureProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: ${(props) => (props.mode === "light" ? "80px" : 0)};
`;

const FeatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const FeatureTitle = styled.h3<FeatureProps>`
  text-transform: uppercase;
  color: ${(props) => (props.mode === "dark" ? "#fff" : "#222")};
  font-size: 0.95rem;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  font-weight: 600;
`;

const FeatureBody = styled.p<FeatureProps>`
  margin: 0;
  padding: 0;
  color: ${(props) => (props.mode === "dark" ? "#fff" : "#888")};
  font-size: 0.95rem;
`;

interface FeatureItemProps {
  mode: "light" | "dark";
}

const FeatureItem: FC<FeatureItemProps & ShopFeature> = ({
  title,
  body,
  icon,
  mode,
}) => {
  return (
    <Container mode={mode}>
      {mode === "dark" && (
        <span
          style={{ color: "#fff" }}
          className="material-icons material-icons-outlined md-54"
        >
          {icon}
        </span>
      )}
      <FeatureInfo>
        {mode === "light" && (
          <span
            style={{ color: "#ab8e66", marginBottom: "18px" }}
            className="material-icons material-icons-outlined md-54"
          >
            {icon}
          </span>
        )}
        <FeatureTitle mode={mode}>{title}</FeatureTitle>
        <FeatureBody mode={mode}>{body}</FeatureBody>
      </FeatureInfo>
    </Container>
  );
};

export default FeatureItem;
