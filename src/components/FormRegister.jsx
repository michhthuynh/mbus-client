import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import logo from '../constant/logo.png'
import { TextField, Button, Box, makeStyles, Typography, Field } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Alert } from '@material-ui/lab';
import API from '../api';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(246, 248, 250)',
    padding: "32px"
  },
  spacing: {
    marginTop: theme.spacing(3)
  },
  fullWidth: {
    width: '100%'
  }
}))

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  fullName: yup
    .string('Enter your full name')
    .required('Full name field is required'),
  age: yup
    .number('Enter your age')
    .min(5, 'Age should be of minimum 5')
    .max(100, 'Age should be of maximum 100 characters length'),
  prePassword: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

function FormRegister(props) {
  const history = useHistory()
  const [msgError, setMsgError] = useState('')
  const classes = useStyle()
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      prePassword: '',
      number: 0,
      age: 1,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.gender === undefined) {
        setMsgError("Please select your gender")
        return
      }
      if (values.acceptTerms === false || values.acceptTerms === undefined) {
        setMsgError("Accept Terms & Conditions is required")
        return
      }
      if (values.password !== values.prePassword) {
        setMsgError("password & pre-password isn't match")
        return
      }
      let isMale = false
      if (values.gender === 'male') {
        isMale = true
      } else {
        isMale = false
      }

      API.post('/auth/register', {
        fullName: values.fullName,
        username: values.email,
        password: values.password,
        prePassword: values.prePassword,
        age: values.age,
        male: isMale,
        number: 0,
        tag_id: "[1,1,1,1,1]"
      }).then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('email', res.data.email)
        localStorage.setItem('fullName', res.data.fullName)
        localStorage.setItem('male', res.data.male)
        localStorage.setItem('number', res.data.number)
        localStorage.setItem('age', res.data.age)
        history.replace('/home')
        window.location.reload()
      }).catch(err => {
        setMsgError('Cannot register system!!!')
      })
    }
  })
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <img src={logo} alt="logo" width="30%" />
      <Box margin="30px 0" width='100%'>
        <Typography variant="h6" component="h6" align="center" style={{ fontWeight: '100' }}>Sign up to Smart Map</Typography>
      </Box>
      {
        msgError &&
        <Box width="100%" marginBottom="32px">
          <Alert severity="error"
            onClose={() => { setMsgError('') }}
          >
            {msgError}
          </Alert>
        </Box>
      }
      <TextField
        className={classes.spacing}
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        className={classes.spacing}
        fullWidth
        id="fullName"
        name="fullName"
        label="Full Name"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
        helperText={formik.touched.fullName && formik.errors.fullName}
      />
      <TextField
        id="age"
        name="age"
        label="Age"
        type="number"
        className={classes.spacing}
        fullWidth
        onChange={formik.handleChange}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
      />
      <TextField
        className={classes.spacing}
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
      <TextField
        className={classes.spacing}
        fullWidth
        id="prePassword"
        name="prePassword"
        label="Pre-Password"
        type="password"
        value={formik.values.prePassword}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.prePassword && formik.errors.prePassword}
      />
      <Box width="100%">
        <FormControl className={classes.spacing} component="fieldset" onChange={formik.handleChange} >
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
            <FormControlLabel name="gender" value="female" control={<Radio />} label="Female" />
            <FormControlLabel name="gender" value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box width="100%">
        <FormControlLabel
          onChange={formik.handleChange}
          control={<Checkbox name="acceptTerms" />}
          label="I accept the terms and conditions."
          help
        />
      </Box>
      <Box marginTop='15px' width="100%">
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default FormRegister;