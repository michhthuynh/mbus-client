import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Card, CardContent, Grid } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import RoomIcon from '@material-ui/icons/Room';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';

import Tag from './Tag'

function Pane(props) {
  const [number, setNumber] = useState(30)
  const [currentLocation, setCurrentLocation] = useState('Phường 13, Quận 10, Thành phố Hồ Chí Minh')
  const derection = {
    start: 'Bến xe miền tây',
    stop: 'Bến xe An Sương'
  }
  return (
    <Container>
      <Grid spacing={5}>
        <Grid item>
          <Card style={{ marginBottom: '20px', borderLeft: '2px solid blue', marginTop: '15px' }}>
            <CardContent>
              <Typography component='p' variant='h6'>
                Vi trí kết thúc:
              </Typography>
              <Typography component='span' variant='body'>
                <DirectionsBusIcon color={'primary'} /> {derection.start}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ marginBottom: '20px', borderLeft: '2px solid green' }}>
            <CardContent>
              <Typography component='p' variant='h6'>
                Vi trí kết thúc:
              </Typography>
              <Typography component='span' variant='body'>
                <DirectionsBusIcon style={{ color: 'green' }} /> {derection.stop}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ marginBottom: '20px', borderLeft: '2px solid red' }}>
            <CardContent>
              <Typography component='p' variant='h6'>
                Vi trí hiện tại:
              </Typography>
              <Typography component='span' variant='body'>
                <RoomIcon color={'error'} /> {currentLocation}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ marginBottom: '20px', borderLeft: '2px solid brown' }}>
            <CardContent>
              <Typography component='p' variant='h6'>
                Số người trên xe:
              </Typography>
              <Typography component='span' variant='body'>
                {number}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Pane;