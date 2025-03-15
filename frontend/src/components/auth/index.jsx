import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

const Auth = () => {
  const [register, setRegister] = useState(false);
  let navigate = useNavigate();
  //redux logic
  const user = useSelector((state) => state.users);

  return <>Auth!!!</>;
};

export default Auth;
