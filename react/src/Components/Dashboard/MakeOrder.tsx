import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { http } from '../../Config/axiosConfig.js';
import Swal from 'sweetalert2';
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import SideAndNavbar from './SideAndNavbar';
import {StyledBox,StyledTextField} from './style';


function MakeOrder() {
  const [amount, setAmount] = useState<String>("");
  const handleSubmit = () => {
  http.post("/payment/",{"amount":amount}).then((res) => {
    if (res.status === 201) {
      Swal.fire({
          toast: true,
          position: 'bottom-end',
          icon: 'success',
          background:'#4aa3d1',
          title: 'Order created successfully Done !',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
      })
  }
  })
}

 
  return (
    <>

<Box sx={{ display: "flex" }}>
      <CssBaseline />
    <SideAndNavbar/>
      <Box
          component="main"
          sx={{
            
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
            <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={12}>
      <StyledBox>
        <h1>Make Order</h1>
        <hr />
        <br />
        {/* 1st Row */}
        <Grid container xs={12}>
          <Grid item sm={12} xs={10} md={3.5} >
            <StyledTextField label="Name" variant="outlined" />
          </Grid>&nbsp;&nbsp;&nbsp;
          <Grid item sm={12} xs={10} md={3.5}>
            <StyledTextField label="Email" variant="outlined" />
          </Grid>&nbsp;&nbsp;&nbsp;
          <Grid item sm={12} xs={10} md={3.5}>
            <StyledTextField label="Phone" variant="outlined" />
          </Grid>
          <br /><br /><br /><br /><br />
        {/* 2nd Row */}
          <Grid item sm={12} xs={10} md={3.5} >
            <StyledTextField label="Amount" variant="outlined" name='amount' onChange={(event) => setAmount(event.target.value)} />
          </Grid>&nbsp;&nbsp;&nbsp;
          <Grid item sm={12} xs={10} md={7.1}>
            <StyledTextField label="Description" variant="outlined" multiline rows={6} />
          </Grid>
        {/* 3rd Row */}
          <Grid item sm={12} xs={10} md={5.5} >
          </Grid>
          <Grid item sm={12} xs={10} md={5.3} >
          </Grid>
          <Grid item sm={12} xs={10} md={1} >
            <br />
            <Button variant="contained" type="submit" onClick={handleSubmit}>Order</Button>
          </Grid>
        </Grid>
      </StyledBox>
      </Grid>
    
    </Grid>
    </Container>

    </Box>
</Box>
    </>
  )
}

export default MakeOrder