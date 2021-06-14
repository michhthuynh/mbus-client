import { Box, Grid, Container } from '@material-ui/core'
import Pane from '../components/Pane'
import React from 'react'
import Map from '../components/Map'
import NavbarDashboard from '../components/NavbarDashboard'

const position = {
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
  }
}

const Dashboard = () => {
  return (
    <>
      <NavbarDashboard />
      <Box display="flex" flexDirection="column" alignItems="center" marginTop="64px" overflow='hidden'>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Pane />
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
