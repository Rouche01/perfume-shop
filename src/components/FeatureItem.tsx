import React, { FC } from "react";
import styled from "styled-components";
import { ShopFeature } from "../types/home";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const FeatureTitle = styled.h3`
  text-transform: uppercase;
  color: #fff;
  font-size: 0.95rem;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  font-weight: 600;
`;

const FeatureBody = styled.p`
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 0.95rem;
`;

interface FeatureItemProps {}

const FeatureItem: FC<FeatureItemProps & ShopFeature> = ({
  title,
  body,
  icon,
}) => {
  return (
    <Container>
      {icon({ size: 80, color: "#fff" })}
      <FeatureInfo>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureBody>{body}</FeatureBody>
      </FeatureInfo>
    </Container>
  );
};

export default FeatureItem;
