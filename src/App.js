import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import './App.scss'
import Login from './pages/Login'
import { useState } from 'react'
import { useEffect } from 'react'
import API from './api'
import getToken from './utils/getToken'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Register from './pages/Register'


const App = () => {
  const [hasLogin, setHasLogin] = useState(true)

  const handleLogin = e => {
    if (e === true) {
      window.location.reload()
    }
  }

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
        !hasLogin && <Redirect to='/home' />
      }
      <Route exact path='/home'>
        <Home hasLogin={hasLogin} />
      </Route>
      <Route exact path='/user/login'>
        <Login hasLogin={hasLogin} onPageSubmit={handleLogin} />
      </Route>
      <Route exact path='/user/register'>
        <Register />
      </Route>
      <Route path='/' exact>
        <Home hasLogin={hasLogin} />
      </Route>
      <Route path='/dashboard' exact>
        <Dashboard />
      </Route>
    </Router>
  )
}

export default App