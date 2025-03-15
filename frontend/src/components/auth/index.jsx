import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

const Auth = () => {
  const [register, setRegister] = useState(false);
  let navigate = useNavigate();
  //redux logic
  const user = useSelector((state) => state.users);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: 'user5@asd.asd',
      password: 'aassdd',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Enter email').email('Enter valid email'),
      password: Yup.string().required('Enter password'),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return <>Auth!!!</>;
};

export default Auth;
