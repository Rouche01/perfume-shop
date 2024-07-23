import { FormRow, PageTitle, RoundedButton } from "@/components/shared";
import { FC } from "react";
import Map from "@/components/Map";
import InputField from "@/components/InputField";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import { useContactFormValidation } from "@/hooks/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContactFormValues } from "@/types/global";
import TextAreaInput from "@/components/TextArea";

import {
  ContactBox,
  ContactForm,
  ContactInfo,
  FormBody,
  IconWrapper,
  InfoBody,
  InfoIcon,
  InfoItem,
  InfoText,
  SectionTitle,
} from "./styles";

const ContactUsPageView: FC = () => {
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
    <>
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
            <RoundedButton bgColor="#ab8e66" type="submit">
              Send Message
            </RoundedButton>
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
              <InfoText>info@perfumeshop.com.ng</InfoText>
            </InfoItem>
          </InfoBody>
        </ContactInfo>
      </ContactBox>
    </>
  );
};

export default ContactUsPageView;
