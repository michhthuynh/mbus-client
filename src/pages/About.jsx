import React from 'react'
import Navbar from '../components/NavbarDashboard'
import { Container, Grid, Typography, Button, Box } from '@material-ui/core'

const About = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6}>
          <img src="bia.svg" alt="bia" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='h4' component='h4' color='primary'>
            ỨNG DỤNG XE BUÝT THÔNG MINH
          </Typography>
          <Typography variant='body1' component='p' style={{ padding: '20px 0' }}>
            Hệ thống sử dụng bản đồ của Google.
            Trên bản đồ có sẵn các chặng đường theo từng tuyến xe và các trạm.
            Dao diện người dùng thể hiện vị trí xe trên bản đồ, số người trên xe, thời gian dự kiến đến trạm đã chọn, số tiền còn trong tài khoản.
            Hành khách sử dụng hệ thống cần đăng kí tài khoản, mua thẻ từ và nạp tiền vô thẻ trước để sử dụng.
            Mỗi lần lên và xuống khách hàng cần quẹt thẻ để xác nhận hoàn thành chuyến đi và số tiền trong tài khoản bị trừ sau mỗi lần đi xe.
          </Typography>
          <Button color="primary" variant="contained">Mua sản phẩm</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About