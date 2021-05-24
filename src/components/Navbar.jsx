import React from 'react'
import { AppBar, Container, IconButton, Toolbar, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textTransform: "uppercase"
  },
}))

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Smart Car
          </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar