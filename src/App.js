import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import { Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  pager: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}))

const App = () => {
  const classes = useStyles()
  return (
    <Container>
      <div className={classes.pager}>
        <Navbar />
        <Profile />
        <Profile />
      </div>
    </Container>
  )
}

export default App