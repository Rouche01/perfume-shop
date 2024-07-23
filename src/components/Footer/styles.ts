import React from "react";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #f3f3f3;
  padding: 50px 0 30px;
`;

export const NewsletterTitle = styled.h4`
  font-size: 0.9rem;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
`;

export const NewsletterSubtitle = styled.p`
  padding: 0;
  margin: 0;
  margin-top: 9px;
  text-align: center;
`;

export const SubscribeForm = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
  justify-content: center;
`;

export const SubscribeInput = styled.input`
  padding: 14px 0;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 100px;
  width: 450px;
  font-size: 0.935rem;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 34px;
`;

export const FooterInnerMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
`;

export const SocialIcon = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  color: #555;
  font-size: 1.4rem;
  &:hover {
    color: #aa8e66;
  }
`;

export const CopyrightText = styled.p`
  margin: 0;
  margin-top: 20px;
  padding: 0;
  font-size: 1rem;
  color: #888;
  text-align: center;
`;
