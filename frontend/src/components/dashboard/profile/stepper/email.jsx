import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { errorHelper, Loader } from "../../../../utils/tools";

import { TextField, Button, Stepper, Step, StepLabel } from "@mui/material";

const EmailStepper = ({ user, closeModal }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Enter old email", "Enter new email", "Are you sure ?"];
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { email: "", newemail: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const nextBtn = () => {
    <Button
      className="mt-3"
      variant="contained"
      color="primary"
      onClick={handleNext}
    >
      Next
    </Button>;
  };

  const backBtn = () => {
    <Button
      className="mt-3"
      variant="contained"
      color="primary"
      onClick={handleBack}
    >
      Back
    </Button>;
  };

  return <>stepper</>;
};

export default EmailStepper;
