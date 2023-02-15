import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const LoginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5, "Password must be atleast 5 characters")
    .matches(passwordRules, {
      message:
        "Password should contain atleast 1 uppercase letter, 1 lowercase letter and 1 numeric digit",
    })
    .required("Required"),
});
