import { Box } from '@material-ui/core'
import React from 'react'
import FormRegister from '../components/FormRegister'

const Register = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh' minWidth='100vw'>
      <FormRegister />
    </Box>
  )
}

export default Register