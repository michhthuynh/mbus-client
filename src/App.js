import React from 'react'
import { makeStyles } from '@material-ui/core'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import './App.scss'
import Login from './pages/Login'
import { useState } from 'react'
import { useEffect } from 'react'
import API from './api'
import getToken from './utils/getToken'
import Dashboard from './pages/Dashboard'

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

const App = () => {
  const [hasLogin, setHasLogin] = useState(true)

  useEffect(() => {
    API.get('/auth/check', getToken)
      .then(res => {
        if (res.status === 200) {
          setHasLogin(true)
        }
        else {
          setHasLogin(false)
        }
      })
      .catch(error => {
        setHasLogin(false)
      })
  })

  return (
    <Router>
      {
        !hasLogin && <Redirect to='/user/login' />
      }
      <Switch>
        <Route exact path='/user/login'>
          <Login hasLogin={hasLogin} />
        </Route>
        <Route path='/'>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default App