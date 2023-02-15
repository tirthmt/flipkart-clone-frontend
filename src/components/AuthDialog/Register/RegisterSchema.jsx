import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const RegisterSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(5, "Firstname should contain min 5 characters")
    .max(20, "Firstname can not exceed 20 characters")
    .required("Required"),
  lastname: yup
    .string()
    .min(5, "Firstname should contain min 5 characters")
    .max(20, "Firstname can not exceed 20 characters")
    .required("Required"),
  username: yup
    .string()
    .lowercase("Username should be in Lowercase")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5, "Password must be atleast 5 characters")
    .matches(passwordRules, {
      message:
        "Password should contain atleast 1 uppercase letter, 1 lowercase letter and 1 numeric digit",
    })
    .required("Required"),
  phone: yup
    .string()
    .required("Required"),
});
