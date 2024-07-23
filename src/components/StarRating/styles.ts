import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const RateStar = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  color: #ffb933;
`;
