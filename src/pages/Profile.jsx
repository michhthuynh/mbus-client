import { Box, Button, Container, makeStyles, Typography, } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../constant/scss/Profile.scss'
import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import API from '../api';
import male from '../male.png'
import female from '../female.png'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '150px',
    display: 'flex',
  },
  avatar: {
    borderRadius: "50%",
    width: "100%",
    display: "block",
  }
}))

const profile = {
  username: "hthuynh",
  full_name: "Huynh Hoang",
  email: "hthuynh@gmail.com",
  phone_number: "0981465863",
  age: "16",
  male: true,
  balance: "173000"
}

const Profile = () => {
  const [number, setNumber] = useState(null)
  const history = useHistory()
  const handleOnClick = () => {
    history.push('/')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      API.post('/auth/number', { email: localStorage.getItem('email') })
        .then(res => {
          localStorage.setItem('number', res.data.msg)
          setNumber(res.data.msg)
        })
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const classes = useStyles()
  return (
    <Container>
      <div className={classes.container}>
        <Box width={250} textAlign='center'>
          <img src={localStorage.getItem('age') === 'Male' ? male : female} className={classes.avatar} alt="avatar" />
          <Box marginTop="5px">
            <Typography variant="h5">{localStorage.getItem('fullName')}</Typography>
          </Box>
          <Box marginTop="5px">
            <Button variant="contained" color="primary" fullWidth>Edit</Button>
          </Box>
        </Box>
        <Box flexGrow={1} paddingLeft="50px">
          <Box marginLeft="40px" display="flex" alignItems="center" borderBottom="1px solid grey" paddingBottom="20px">
            <AccountCircleIcon style={{ fontSize: 40, paddingRight: "10px" }} />
            <Typography variant="h4">Overview</Typography>
          </Box>
          <ul className="profile__list">
            <li>
              <Typography variant="h6">Full name:</Typography>
              <Typography component="span">{localStorage.getItem('fullName')}</Typography>
            </li>
            <li>
              <Typography variant="h6">Email:</Typography>
              <Typography component="span">{localStorage.getItem('email')}</Typography>
            </li>
            <li>
              <Typography variant="h6">Age:</Typography>
              <Typography component="span">{localStorage.getItem('age')}</Typography>
            </li>
            <li>
              <Typography variant="h6">Gender:</Typography>
              <Typography component="span">{localStorage.getItem('male')}</Typography>
            </li>
            <li>
              <Typography variant="h6">Balance:</Typography>
              <Typography component="span">{number ? number : localStorage.getItem('number')}</Typography>
            </li>
          </ul>
          <Box paddingLeft="40px">
            <Button color="primary" variant="contained" onClick={handleOnClick}>Home Page</Button>
          </Box>
        </Box>
      </div>
    </Container >
  )
}

export default Profile