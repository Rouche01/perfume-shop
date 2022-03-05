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

export const useLoginFormValidation = () => {
  const validationSchema = Yup.object({
    emailAddress: Yup.string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required and must be 8 characters plus"),
  });

  return { validationSchema };
};

export const useRegisterFormValidation = () => {
  const validationSchema = Yup.object({
    emailAddress: Yup.string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required and must be 8 characters plus"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
  });

  return { validationSchema };
};
