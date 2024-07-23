import React from "react";
import styled from "styled-components";

interface SectionTitleProps {
  color: string;
}

interface InfoIconProps {
  component: any;
}

export const ContactBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  margin-top: -160px;
  position: relative;
  z-index: 100;
  margin-bottom: 50px;
  box-shadow: 0 0 12px 0 rgb(2 2 2 / 16%);
`;

export const ContactForm = styled.div`
  background-color: #fff;
  padding: 55px 70px;
`;

export const SectionTitle = styled.h2<SectionTitleProps>`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => props.color};
`;

export const FormBody = styled.div`
  margin: 40px 0 30px;
`;

export const ContactInfo = styled.div`
  background-color: #111111;
  padding: 55px 45px 45px;
`;

export const InfoBody = styled.div`
  margin-top: 60px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const InfoIcon = styled(({ component, ...props }: InfoIconProps) =>
  React.cloneElement(component, props)
)`
  border-radius: 100%;
  border: 1px solid #ab8e66;
  width: 42px;
  height: 42px;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  color: #ddd;
  margin-left: 30px;
  line-height: 1.6rem;
`;
