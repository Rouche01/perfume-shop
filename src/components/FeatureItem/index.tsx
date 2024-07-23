import React, { FC } from "react";
import { ShopFeature } from "@/types/home";

import { Container, FeatureBody, FeatureInfo, FeatureTitle } from "./styles";

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
