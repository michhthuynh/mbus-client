import { Box } from '@material-ui/core'
import React from 'react'
// import Map from '../components/Map'
import NavbarDashboard from '../components/NavbarDashboard'


const Dashboard = () => {
  return (
    <>
      <NavbarDashboard />
      <Box display="flex" flexDirection="column" alignItems="center" marginTop="80px">
        {/* <Map /> */}
      </Box>
    </>
  )
}
export default Dashboard