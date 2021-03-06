import { Box, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import logo from '../constant/logo.png'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import { Alert } from '@material-ui/lab';
import API from '../api/index'

const useStyles = makeStyles((theme) => ({
  margin: {
    marginRight: theme.spacing(2)
  },
  marginTop: {
    marginTop: '30px'
  }
}));

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Login = (props) => {
  const [msgErr, setMsgErr] = useState('')
  const history = useHistory()


  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      API.post("/auth/login", {
        username: values.email,
        password: values.password
      })
        .then(res => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('email', res.data.email)
          localStorage.setItem('fullName', res.data.fullName)
          localStorage.setItem('male', res.data.male)
          localStorage.setItem('number', res.data.number)
          localStorage.setItem('age', res.data.age)
          history.replace('/')
          window.location.reload()
        })
        .catch(error => {
          setMsgErr('Wrong Credential')
        })
    },
  });

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100">
      <>
        <Box width="340px" display='flex' justifyContent='center' flexDirection='column' alignItems="center">
          <img src={logo} alt="logo" width="30%" />
          <Box margin="30px 0" width='100%'>
            <Typography variant="h6" component="h6" align="center" style={{ fontWeight: '100' }}>Sign in to Smart Map</Typography>
          </Box>
          {
            msgErr &&
            <Box width="100%" marginBottom="32px">
              <Alert severity="error"
                onClose={() => { setMsgErr('') }}
              >
                {msgErr}
              </Alert>
            </Box>
          }
          <Box padding="32px 32px 0 32px" bgcolor="rgb(246, 248, 250)" borderRadius="6px" border="1px solid rgb(235, 237, 239)" width="100%">
            <form onSubmit={formik.handleSubmit}>
              <Box marginBottom="20px">
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Box>
              <Box margin="32px 0">
                <Button color="primary" variant="contained" fullWidth type="submit">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
          <Typography className={classes.marginTop}>
            <Button className={classes.margin} onClick={() => { history.push('/user/register') }}>
              Sign up
            </Button>
            <Button className={classes.margin} onClick={() => { history.push('/') }}>
              Home
            </Button>
          </Typography>
        </Box>
      </>
    </Box >
  )
}

export default Login