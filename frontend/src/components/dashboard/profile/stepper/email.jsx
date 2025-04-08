import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { errorHelper, Loader } from "../../../../utils/tools";

import { TextField, Button, Stepper, Step, StepLabel } from "@mui/material";

const EmailStepper = ({ user, closeModal }) => {
  return <>stepper</>;
};

export default EmailStepper;
