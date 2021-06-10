import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
import About from './About'
import Profile from './Profile'

const useStyles = makeStyles((theme) => ({
  pager: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    marginTop: theme.spacing(8),
  }
}))

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Box display="flex" flexDirection="column" alignItems="center" marginTop="80px">
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/'>
          <Map />
        </Route>
      </Box>
    </>
  )
}
export default Dashboard