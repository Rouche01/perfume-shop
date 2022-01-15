import React, { FC, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.div`
  background-color: #f3f3f3;
  padding: 50px 0 30px;
`;

const NewsletterTitle = styled.h4`
  font-size: 0.9rem;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
`;

const NewsletterSubtitle = styled.p`
  padding: 0;
  margin: 0;
  margin-top: 9px;
  text-align: center;
`;

const SubscribeForm = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
  justify-content: center;
`;

const SubscribeInput = styled.input`
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

const SubscribeBtn = styled.button`
  font-size: 0.935rem;
  padding: 14px 32px;
  text-transform: uppercase;
  border-radius: 100px;
  background-color: #aa8e66;
  border: 1px solid #aa8e66;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

const FooterMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 34px;
`;

const FooterInnerMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
`;

const SocialIcon = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  color: #555;
  font-size: 1.4rem;
  &:hover {
    color: #aa8e66;
  }
`;

const CopyrightText = styled.p`
  margin: 0;
  margin-top: 20px;
  padding: 0;
  font-size: 1rem;
  color: #888;
  text-align: center;
`;

const footerLinks = [
  {
    name: "Track Order",
    link: "/track-order",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "Privacy & Cookies",
    link: "/privacy-cookies",
  },
  {
    name: "Terms + Conditions",
    link: "terms-conditions",
  },
  {
    name: "FAQs",
    link: "/faqs",
  },
];

const Footer: FC = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [hoverState, setHoverState] =
    useState<{ name: string; hoverState: boolean }>();

  const handleMouseEnter = (linkId: string) => {
    setHoverState({
      name: linkId,
      hoverState: true,
    });
  };

  const handleMouseLeave = (linkId: string) => {
    setHoverState({
      name: linkId,
      hoverState: false,
    });
  };

  return (
    <>
      <FooterContainer>
        <NewsletterTitle>Sign up for our Newsletter</NewsletterTitle>
        <NewsletterSubtitle>
          Get updated on new arrivals and latest offers
        </NewsletterSubtitle>
        <SubscribeForm>
          <>
            <SubscribeInput
              placeholder="Your email address"
              type="text"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <SubscribeBtn>Subscribe</SubscribeBtn>
          </>
        </SubscribeForm>
        <FooterMenu>
          <FooterInnerMenu>
            {footerLinks.map(({ name, link }) => (
              <Link href={link} key={link}>
                <a
                  onMouseEnter={() => handleMouseEnter(name)}
                  onMouseLeave={() => handleMouseLeave(name)}
                  style={
                    hoverState?.hoverState && hoverState.name === name
                      ? { opacity: "1" }
                      : { opacity: "0.5" }
                  }
                >
                  {name}
                </a>
              </Link>
            ))}
          </FooterInnerMenu>
        </FooterMenu>
        <SocialContainer>
          <SocialLinks>
            <Link href="https://facebook.com">
              <a>
                <SocialIcon component={<FaFacebookF />} />
              </a>
            </Link>
            <Link href="https://twitter.com">
              <a>
                <SocialIcon component={<FaTwitter />} />
              </a>
            </Link>
            <Link href="https://instagram.com">
              <a>
                <SocialIcon component={<FaInstagram />} />
              </a>
            </Link>
          </SocialLinks>
        </SocialContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span style={{ color: "#aa8e66" }}>Peace Luxury</span> . All rights
          reserved
        </CopyrightText>
      </FooterContainer>
    </>
  );
};

export default Footer;
