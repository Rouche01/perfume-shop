import * as Yup from "yup";

export const useContactFormValidation = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    emailAddress: Yup.string()
      .email("Must be a valid email")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  return { validationSchema };
};
