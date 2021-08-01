import { Box, Grid, Container } from '@material-ui/core'
import Pane from '../components/Pane'
import React, { useEffect, useState } from 'react'
import Map from '../components/Map'
import NavbarDashboard from '../components/NavbarDashboard'
import API from '../api/index'
import axios from 'axios'
import env from "react-dotenv";

const Dashboard = () => {
  const [position, setPosition] = useState({
    current: {
      lat: 10.823099,
      lng: 106.629662
    },
    stop: {
      lat: 10.843850585785676,
      lng: 106.61378211409107,
    },
    start: {
      lat: 10.74125936864197,
      lng: 106.61896422657834,
    },
    number: 0
  })

  const [nameCurrent, setNameCurrent] = useState('')

  useEffect(() => {
    const timer = setInterval(
      async () => {
        try {
          const fetchPosition = await API.get('/position')
          setPosition({
            ...position,
            number: parseInt(fetchPosition.data.number),
            current: {
              lat: parseFloat(fetchPosition.data.lat),
              lng: parseFloat(fetchPosition.data.lng),
            }
          })
        } catch (error) {
          console.log(error)
        }
      },
      5000
    );
    return () => clearInterval(timer);

  }, [])

  useEffect(() => {
    const token = env?.TOKEN
    const url = `https://discover.search.hereapi.com/v1/discover?at=${position.current.lat},${position.current.lng}&q=street&apiKey=${token}`
    axios.get(url)
      .then(res => {
        const address = res.data.items[0].address
        if (address.street === undefined) {
          setNameCurrent('Không thể lấy vị trí hiện tại')
        } else {
          setNameCurrent(`${address.houseNumber}, ${address.street}, ${address.district}, ${address.city}`)
        }
      }).catch(
        setNameCurrent('Không thể lấy vị trí hiện tại')
      )
  }, [position])

  return (
    <>
      <NavbarDashboard />
      <Box display="flex" flexDirection="column" alignItems="center" marginTop="64px" overflow='hidden'>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Pane number={position.number} name={nameCurrent} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Map position={position} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default Dashboard
