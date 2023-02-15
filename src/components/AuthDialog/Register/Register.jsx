import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";

import { RegisterSchema } from "./RegisterSchema";
import { signUpUser } from "../../../utils/service/userService";
import { DataContext } from "../../../hooks/context/DataProvider";
import CustomInput from "../CustomInput/CustomInput";

const Register = ({ handleClose }) => {
  const initialSignUpValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };

  const { setAccount } = useContext(DataContext);

  // Click on Continue
  const SignUpClickHandler = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await signUpUser(values);
    if (!response) return;

    if (response.status === 201) {
      handleClose();
      setAccount(response?.data?.user?.username);
    }
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialSignUpValues}
        validationSchema={RegisterSchema}
        onSubmit={SignUpClickHandler}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              name="firstname"
              type="text"
              placeholder="Enter Firstname"
            />
            <CustomInput
              name="lastname"
              type="text"
              placeholder="Enter Lastname"
            />
            <CustomInput
              name="username"
              type="text"
              placeholder="Enter Username"
            />
            <CustomInput name="email" type="text" placeholder="Enter Email" />
            <CustomInput
              name="password"
              type="text"
              placeholder="Enter Password"
            />
            <CustomInput
              name="phone"
              type="text"
              placeholder="Enter Phone number"
            />
            <Button
              className="orangeButton w-100 mb10"
              type="submit"
              disabled={isSubmitting}
            >
              Continue
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
