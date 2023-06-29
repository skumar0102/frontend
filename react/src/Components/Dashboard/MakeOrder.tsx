import React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { http } from '../../Config/axiosConfig.js';
import Swal from 'sweetalert2';
const StyledBox = styled(Box)(({
  padding: 10,
  border: '2px solid black',
  borderRadius: '10px',
  minHeight: '500px',
  textAlign: 'center',
  // alignItems:'center'
  // boxShadow:'2px 2px 10px 5px white'
}));

const StyledTextField = styled(TextField)(({
  width: '100%'
}));


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
    </>
  )
}

export default MakeOrder