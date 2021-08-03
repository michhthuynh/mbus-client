import React from 'react'
import { AppBar, Box, Toolbar } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: 500,
    paddingLeft: '20px'
  },
  logo: {
    fontWeight: 500,
    flexGrow: 1,
  }
}))

const NavbarDashboard = () => {
  const history = useHistory()
  const handleOnClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('fullName')
    localStorage.removeItem('male')
    localStorage.removeItem('age')
    localStorage.removeItem('number')
    history.push('/')
    window.location.reload()
  }
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Box className={classes.logo}>
          <Link to='./'>SMART BUS</Link>
        </Box>
        <Link className={classes.link} to='/home'>About me</Link>
        <Link className={classes.link} to='/home' onClick={handleOnClick}>Sign out</Link>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarDashboard