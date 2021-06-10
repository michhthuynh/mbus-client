import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
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
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Link className={classes.logo} to='./'>SMART BUS</Link>
        <Link className={classes.link} to='/home'>About me</Link>
        <Link className={classes.link} to='/user/login'>Sign out</Link>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarDashboard