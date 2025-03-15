import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Loader } from '../../utils/tools';

const Auth = () => {
  const [register, setRegister] = useState(false);
  let navigate = useNavigate();
  //redux logic
  const users = useSelector((state) => state.users);
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
      doHandleSubmit(values);
    },
  });

  const doHandleSubmit = (values) => {
    if (register) {
      //dispatch register
    } else {
      //dispatch login
    }
  };

  return (
    <>
      <div className="auth_container">
        <h1>Authenticate</h1>
        {users.loading ? (
          <Loader />
        ) : (
          <Box
            sx={{
              '& .MuiTextField-root': { width: '100%', marginTop: '20px' },
            }}
            component="form"
            onSubmit={formik.handleSubmit}
          >
            <TextField
              name="email"
              label="Enter your email"
              variant="outlined"
              {...formik.getFieldProps('email')}
            />

            <TextField
              name="password"
              label="Enter your password"
              variant="outlined"
              type="password"
              {...formik.getFieldProps('password')}
            />
          </Box>
        )}
      </div>
    </>
  );
};

export default Auth;
