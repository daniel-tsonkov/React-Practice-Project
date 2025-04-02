import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { errorHelper } from "../../../utils/tools";
import { TextField, Button } from "@mui/material";

const AddCategories = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { name: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("The name is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });
  return <>form</>;
};

export default AddCategories;
