import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, makeStyles, TextField, Typography } from '@material-ui/core'
import { useFormik } from 'formik';
import { Redirect, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import logo from '../constant/logo.png'
import { Alert } from '@material-ui/lab';
import { useState } from 'react';
import * as yup from 'yup';
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
  tagID: yup
    .string('Enter your password')
    .min(8, 'Tag ID should be of minimum 8 characters length')
    .required('Tag ID field is required'),
});

const RegisterTag = props => {
  const history = useHistory()

  const classes = useStyles()
  const [msgErr, setMsgErr] = useState('')
  const formik = useFormik({
    initialValues: {
      email: '',
      tagID: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      API.post("/tag/register", {
        username: values.email,
        tag_id: values.tagID
      })
        .then(res => {
          history.replace('/home')
          window.location.reload()
        })
        .catch(res => {
          setMsgErr('Cannot Register Tag')
        })
    },
  });
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100">
      <>
        <Box width="340px" display='flex' justifyContent='center' flexDirection='column' alignItems="center">
          <img src={logo} alt="logo" width="30%" />
          <Box margin="30px 0" width='100%'>
            <Typography variant="h6" component="h6" align="center" style={{ fontWeight: '100' }}>Register Tag for Smart Map</Typography>
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
                  id="tagID"
                  name="tagID"
                  label="Tag ID"
                  value={formik.values.tagID}
                  onChange={formik.handleChange}
                  error={formik.touched.tagID && Boolean(formik.errors.tagID)}
                  helperText={formik.touched.tagID && formik.errors.tagID}
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
            <Link href="/" className={classes.margin}>
              Home page
            </Link>
            <Link href="/" className={classes.margin}>
              Contact me
            </Link>
          </Typography>
        </Box>
      </>
    </Box >
  );
};

RegisterTag.propTypes = {

};

export default RegisterTag;