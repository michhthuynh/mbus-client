import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import './App.scss'
import Login from './pages/Login'
import { useState } from 'react'
import { useEffect } from 'react'
import API from './api'
import getToken from './utils/getToken'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'
import RegisterTag from './pages/RegisterTag'
import DashboardV2 from './pages/DashboardV2';


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
      <Route exact path='/home'>
        <Home hasLogin={hasLogin} />
      </Route>
      {/* <Route exact path='/test'>
        <DashboardV2 />
      </Route> */}
      <Route exact path='/user/login' render={() => hasLogin ? <Redirect to="/" /> : <Login />} />
      <Route exact path='/profile' render={() => hasLogin ? <Profile /> : <Login />} />
      <Route exact path='/registerTag' render={() => hasLogin ? <RegisterTag /> : <Login />} />
      <Route exact path='/user/register'>
        <Register />
      </Route>
      <Route path='/' exact>
        <Home hasLogin={hasLogin} />
      </Route>
      <Route path='/dashboard' exact render={() => hasLogin ? <DashboardV2 /> : <Redirect to="/user/login" />} />
    </Router>
  )
}

export default App