import { Box, Grid } from '@material-ui/core'
import Pane from '../components/Pane'
import { withScriptjs, } from "react-google-maps";
import React, { useEffect, useState } from 'react'
import NavbarDashboard from '../components/NavbarDashboard'
import API from '../api/index'
import Direction from '../components/Direction'

const DashboardV2 = () => {
  const MapLoader = withScriptjs(Direction);
  const [position, setPosition] = useState({
    lat: 10.772230306775052,
    lng: 106.59197449625184,
    number: 0,
  })
  const [distanceGo, setDistanceGo] = useState('')
  const [distanceFrom, setDistanceFrom] = useState('')

  const [nameCurrent, setNameCurrent] = useState('')

  useEffect(() => {
    API.get('/position')
      .then(({ data }) => {
        setPosition({
          lat: parseFloat(data.lat),
          lng: parseFloat(data.lng),
          number: data.number
        })
      })

  }, [])

  useEffect(() => {
    const timer = setInterval(
      async () => {
        try {
          const fetchPosition = await API.get('/position')
          setPosition({
            lat: parseFloat(fetchPosition.data.lat),
            lng: parseFloat(fetchPosition.data.lng),
            number: fetchPosition.data.number
          })
        } catch (error) {
          console.log(error)
        }
      },
      30000
    );
    return () => clearInterval(timer);
  })

  const handleCurrent = data => {
    setNameCurrent(data.legs[0].end_address)
    setDistanceGo(data.legs[0].distance.text)
    setDistanceFrom(data.legs[1].distance.text)
  }


  return (
    <>
      <NavbarDashboard />
      <Box display="flex" flexDirection="column" alignItems="center" marginTop="64px" overflow='hidden'>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Pane number={position.number} name={nameCurrent} distanceGo={distanceGo} distanceFrom={distanceFrom} />
          </Grid>
          <Grid item xs={12} md={9}>
            <MapLoader
              handleCurrent={handleCurrent}
              lat={position.lat}
              lng={position.lng}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMd9MblhDAvN7fS3TUayXPGkkFJ6IhznM"
              loadingElement={<div style={{ height: `100%` }} />}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default DashboardV2
