import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Form, Formik } from "formik";

import { LoginSchema } from "./LoginSchema";
import { signInUser } from "../../../utils/service/userService";
import { DataContext } from "../../../hooks/context/DataProvider";
import CustomInput from "../CustomInput/CustomInput";

const Login = ({ handleClose, navigateFromLoginToRegister }) => {
  const initialSignInValues = {
    email: "",
    password: "",
  };

  const { setAccount } = useContext(DataContext);

  const SignInClickHandler = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await signInUser(values);
    if (!response) return;

    if (response.status === 200) {
      handleClose();
      setAccount(response?.data?.user?.username);
    }
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialSignInValues}
        validationSchema={LoginSchema}
        onSubmit={SignInClickHandler}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput name="email" type="text" placeholder="Enter Email" />
            <CustomInput
              name="password"
              type="text"
              placeholder="Enter Password"
            />
            <Typography className="mb10">
              By continuing, You agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>
            <Button
              className="orangeButton w-100 mb10"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </Button>
            <Typography className="text-center">OR</Typography>
            <Box className="d-flex justify-center mb10">
              <Button className="orangeButton d-flex mb10">Request OTP</Button>
            </Box>
            <Typography>
              New to Flipkart?{" "}
              <span
                className="c-pointer createAccount fw-600"
                onClick={() => navigateFromLoginToRegister()}
              >
                Create an account
              </span>
            </Typography>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
