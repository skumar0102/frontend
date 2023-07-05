import React, { useState,useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useRazorpay from "react-razorpay";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import SideAndNavbar from './SideAndNavbar';
const StyledBox = styled(Box)({
  padding: 10,
  border: "2px solid black",
  borderRadius: "10px",
  minHeight: "500px",
  textAlign: "center",
  // alignItems:'center'
  // boxShadow:'2px 2px 10px 5px white'
});

const StyledTextField = styled(TextField)({
  width: "100%",
});

function MakePayment() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Desc, setDesc] = useState("");
  const [order, setOrder_id] = useState("");

  const Razorpay = useRazorpay();
  const loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options: any = {
      key: "rzp_test_3m3hH2PZBRuAYT", // Enter the Key ID generated from the Dashboard
      amount: "50000",
      name: Name,
      currency: "INR",
      order_id: order,
      description: Desc,
      // image: { logo },
      handler: async function (response: any) {
        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
      },
      prefill: {
        name: Name,
        email: Email,
        contact: Contact,
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new Razorpay(options);
    paymentObject.open();
  }
  useEffect(() => {
  setName('');
  setEmail('');
  setContact('');
  setDesc('');
  }, [])
  
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
        <h1>Make Payment</h1>
        <hr />
        <br />
        <Grid container xs={12}>
          <Grid item sm={12} xs={10} md={3.5}>
            <StyledTextField
              label="Name"
              name="Name"
              variant="outlined"
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          &nbsp;&nbsp;&nbsp;
          <Grid item sm={12} xs={10} md={3.5}>
            <StyledTextField
              label="Email"
              name="email"
              variant="outlined"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          &nbsp;&nbsp;&nbsp;
          <Grid item sm={12} xs={10} md={3.5}>
            <StyledTextField
              label="Phone"
              name="contact"
              variant="outlined"
              onChange={(event) => setContact(event.target.value)}
            />
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Grid item sm={12} xs={10} md={3.5}>
            <StyledTextField label="Order ID" type="text" name="order_id" variant="outlined" 
            onChange={(event) => setOrder_id(event.target.value)}
            />
          </Grid>
          &nbsp;&nbsp;&nbsp;
          <Grid item sm={12} xs={10} md={7.1}>
            <StyledTextField
              label="Description"
              name="desc"
              variant="outlined"
              multiline
              rows={6}
              onChange={(event) => setDesc(event.target.value)}
            />
          </Grid>
          <Grid item sm={12} xs={10} md={5.5}></Grid>
          <Grid item sm={12} xs={10} md={5.3}></Grid>
          <Grid item sm={12} xs={10} md={1}>
            <br />
            <Button variant="contained" type="submit" onClick={displayRazorpay}>
              Pay
            </Button>
          </Grid>
        </Grid>
      </StyledBox>
      </Grid>
    
    </Grid>
    </Container>

    </Box>
</Box>
    </>
  );
}

export default MakePayment;
