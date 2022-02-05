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

interface FormRowProps {
  columns: number;
  mt?: number;
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

const FormTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
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
            <FormTitle>Send us a Message!</FormTitle>
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
        <ContactInfo></ContactInfo>
      </ContactBox>
    </PageContainer>
  );
};

export default ContactUs;
