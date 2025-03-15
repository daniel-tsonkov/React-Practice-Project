import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Checkbox, FormControlLabel } from '@mui/material';

import { Loader, errorHelper } from '../../utils/tools';

const Auth = () => {
  const [register, setRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Държи състоянието на чекбокса
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
      email: Yup.string()
        .required('Please enter email')
        .email('Enter valid email'),
      password: Yup.string().required('Please enter password'),
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
              {...errorHelper(formik, 'email')}
            />

            <TextField
              name="password"
              label="Enter your password"
              variant="outlined"
              //   type="password"
              type={showPassword ? 'text' : 'password'} // Променя типа на паролата
              {...formik.getFieldProps('password')}
              {...errorHelper(formik, 'password')}
            />
            {/* Чекбокс за показване на паролата */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
              }
              label="Show password"
            />

            <div className="mt-2">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
              >
                {register ? 'Register' : 'Login'}
              </Button>
              <Button
                className="mt-3"
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => setRegister(!register)}
              >
                Want to {!register ? 'Register' : 'Login'}
              </Button>
            </div>
          </Box>
        )}
      </div>
    </>
  );
};

export default Auth;
