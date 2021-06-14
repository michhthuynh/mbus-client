import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';

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


const NavbarHome = (props) => {
  const history = useHistory()
  const handleOnClick = () => {
    localStorage.removeItem('token')
    history.push('/')
    window.location.reload()
  }
  const { hasLogin } = props
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Link className={classes.logo} to='./'>SMART BUS</Link>
        {
          hasLogin ?
            <>
              <Link className={classes.link} to='/dashboard'>Dashboard</Link>
              <Link className={classes.link} to='/' onClick={handleOnClick}>Logout</Link>
            </>
            :
            <>
              <Link className={classes.link} to='/user/register'>Sign up</Link>
              <Link className={classes.link} to='/user/login'>Sign in</Link>
            </>
        }

      </Toolbar>
    </AppBar>
  )
}

NavbarHome.propTypes = {
  hasLogin: PropTypes.bool.isRequired
};

NavbarHome.defaultProps = {
  hasLogin: false
}

export default NavbarHome