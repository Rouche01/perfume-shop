import React, { FC, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { RoundedButton } from "@/components/shared";
import {
  FooterContainer,
  CopyrightText,
  FooterInnerMenu,
  FooterMenu,
  NewsletterSubtitle,
  NewsletterTitle,
  SocialContainer,
  SocialIcon,
  SocialLinks,
  SubscribeForm,
  SubscribeInput,
} from "./styles";

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
  const [hoverState, setHoverState] = useState<{
    name: string;
    hoverState: boolean;
  }>();

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
            <RoundedButton bgColor="#aa8e66">Subscribe</RoundedButton>
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
