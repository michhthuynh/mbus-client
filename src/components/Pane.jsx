import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import PropTypes from 'prop-types';

Pane.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string
}

Pane.defaultProps = {
  number: 0,
  name: '',
}

function Pane(props) {
  const { number, name } = props
  const stay = {
    start: 'Bến xe miền tây',
    stop: 'Bến xe An Sương'
  }
  return (
    <Container>
      <Grid>
        <Grid item>
          <Card style={{ marginBottom: '20px', borderLeft: '2px solid blue', marginTop: '15px' }}>
            <CardContent>
              <Typography component='p' variant='h6'>
                Vi trí bắt đầu:
              </Typography>
              <Typography component='span' variant='body1'>
                <DirectionsBusIcon color={'primary'} /> {stay.start}
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
              <Typography component='span' variant='body1'>
                <DirectionsBusIcon style={{ color: 'green' }} /> {stay.stop}
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
              <Typography component='span' variant='body1'>
                <RoomIcon color={'error'} /> {name}
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
              <Typography component='span' variant='body1'>
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