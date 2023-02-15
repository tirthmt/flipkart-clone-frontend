import { useField } from "formik";
import { TextField } from "@mui/material";
import "../AuthDialog.scss";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField
        variant="standard"
        className={`mb10 w-100 AuthInputField ${
          meta.touched && meta.error ? "input-error" : ""
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomInput;
