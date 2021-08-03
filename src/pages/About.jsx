import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Grid, Typography, Button } from '@material-ui/core'

const About = () => {
  const history = useHistory()
  const handleOnClick = () => {
    history.push('/registerTag')
  }
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
          <Button color="primary" variant="contained" onClick={handleOnClick}>Mua sản phẩm</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About