import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Map from "../src/components/Map";
import { PageContainer, PageTitle } from "../src/generalStyles";
import { useForm } from "react-hook-form";
import InputField from "../src/components/InputField";
import TextAreaInput from "../src/components/TextArea";
import { RoundedButton } from "../src/components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContactFormValidation } from "../src/hooks/validationSchema";
import { ContactFormValues } from "../src/types/global";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";

interface SectionTitleProps {
  color: string;
}
interface FormRowProps {
  columns: number;
  mt?: number;
}

interface InfoIconProps {
  component: any;
}

const ContactBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  margin-top: -160px;
  position: relative;
  z-index: 100;
  margin-bottom: 50px;
  box-shadow: 0 0 12px 0 rgb(2 2 2 / 16%);
`;

const ContactForm = styled.div`
  background-color: #fff;
  padding: 55px 70px;
`;

const SectionTitle = styled.h2<SectionTitleProps>`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => props.color};
`;

const FormBody = styled.div`
  margin: 40px 0 30px;
`;

const FormRow = styled.div<FormRowProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 1 ? "1fr" : "1fr 1fr"};
  gap: 25px;
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : 0)};
`;

const ContactInfo = styled.div`
  background-color: #111111;
  padding: 55px 45px 45px;
`;

const InfoBody = styled.div`
  margin-top: 60px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const InfoIcon = styled(({ component, ...props }: InfoIconProps) =>
  React.cloneElement(component, props)
)`
  border-radius: 100%;
  border: 1px solid #ab8e66;
  width: 42px;
  height: 42px;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  color: #ddd;
  margin-left: 30px;
  line-height: 1.6rem;
`;

const ContactUs = () => {
  const { validationSchema } = useContactFormValidation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: yupResolver(validationSchema) });

  const submitContactForm = (data: ContactFormValues) => {
    console.log(data);
  };

  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury | Contact Us</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle>Contact Us</PageTitle>
      <Map
        location={{
          address: "Addo Road, Ajah, Lagos, Nigeria",
          lat: 6.466667,
          lng: 3.566667,
        }}
        zoomLvl={12}
      />
      <ContactBox>
        <ContactForm>
          <form onSubmit={handleSubmit(submitContactForm)}>
            <SectionTitle color="#0A0A0A">Send us a Message!</SectionTitle>
            <FormBody>
              <FormRow columns={2}>
                <InputField
                  label="Your Name *"
                  type="text"
                  name="name"
                  registerFn={register}
                  errorText={errors.name?.message}
                />
                <InputField
                  label="Your Email *"
                  type="email"
                  name="emailAddress"
                  registerFn={register}
                  errorText={errors.emailAddress?.message}
                />
              </FormRow>
              <FormRow columns={2} mt={20}>
                <InputField
                  label="Phone"
                  type="tel"
                  name="phone"
                  registerFn={register}
                  errorText={errors.phone?.message}
                />
                <InputField
                  label="Company"
                  type="text"
                  name="company"
                  registerFn={register}
                  errorText={errors.company?.message}
                />
              </FormRow>
              <FormRow columns={1} mt={20}>
                <TextAreaInput
                  label="Your Message *"
                  name="message"
                  registerFn={register}
                  errorText={errors.message?.message}
                />
              </FormRow>
            </FormBody>
            <RoundedButton type="submit">Send Message</RoundedButton>
          </form>
        </ContactForm>
        <ContactInfo>
          <SectionTitle color="#FFF">Contact Information</SectionTitle>
          <InfoBody>
            <InfoItem>
              <InfoIcon
                component={
                  <IconWrapper>
                    <FaMapMarkerAlt size={16} color="#ab8e66" />
                  </IconWrapper>
                }
              />
              <InfoText>Addo Road, Ajah, Lagos,Nigeria.</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon
                component={
                  <IconWrapper>
                    <FaPhoneAlt size={16} color="#ab8e66" />
                  </IconWrapper>
                }
              />
              <InfoText>
                (+234) 810 485 2967 <br />
                (+234) 901 765 6561
              </InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon
                component={
                  <IconWrapper>
                    <VscMail size={18} color="#ab8e66" />
                  </IconWrapper>
                }
              />
              <InfoText>
                info@perfumeshop.com.ng
              </InfoText>
            </InfoItem>
          </InfoBody>
        </ContactInfo>
      </ContactBox>
    </PageContainer>
  );
};

export default ContactUs;
