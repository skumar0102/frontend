import React, { useState, useEffect, useContext } from 'react';
import { http } from '../../Config/axiosConfig.js';
import { ThemeContext } from '../../Context/Theme';
import { Theme, ThemesColors } from '../../Context/Enums.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import useRazorpay from "react-razorpay";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import SideAndNavbar from './SideAndNavbar';
import {StyledTableCell,StyledTableRow} from './style';


function ViewOrders() {
  const [Orders, setOrders] = useState<any[]>([]);
  const itemsPerPage = 8;
  const [page, setPage] = useState<any>(1);
  const [noPages, setNoPages] = useState<any>(0);
  const { theme, setTheme } = useContext(ThemeContext);
  const handleChange = (key: any, value: any) => {
    setPage(value);
  }

  // Razorpay code start
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

  async function displayRazorpay(Orders:any,key:any) {
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
      // name: ,
      currency: "INR",
      order_id: Orders[key].id,
      // description: Desc,
      // image: { logo },
      handler: async function (response: any) {
        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
      },
      prefill: {
        name: "Sushil Kumar",
        email: "Sk@gmail.com",
        contact: "7859632659",
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
  // Razorpay code end


  useEffect(() => {
    http.get("/payment/orders").then((res) => {
      setOrders(res.data.result.items);
      setNoPages(Math.ceil(res.data.result.items.length / itemsPerPage));
    })
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ORDER ID</StyledTableCell>
              <StyledTableCell align="right">AMOUNT</StyledTableCell>
              <StyledTableCell align="right">AMOUNT DUE</StyledTableCell>
              <StyledTableCell align="right">AMOUNT PAID</StyledTableCell>
              <StyledTableCell align="right">ATTEMPTS</StyledTableCell>
              <StyledTableCell align="right">CURRENCY</StyledTableCell>
              <StyledTableCell align="right">RECEIPT</StyledTableCell>
              <StyledTableCell align="right">STATUS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(Orders).slice((page - 1) * itemsPerPage, page * itemsPerPage).map((key: any) => (
              <StyledTableRow key={key}>
                <StyledTableCell component="th">{Orders[key].id}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].amount}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].amount_due}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].amount_paid}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].attempts}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].currency}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].receipt}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button disableRipple  onClick={()=> displayRazorpay(Orders,key)} variant='outlined' startIcon={Orders[key].status == "paid" ? <CurrencyRupeeIcon /> : <AutorenewIcon />} color={Orders[key].status == "paid" ? 'success' : 'error'}>

                    {Orders[key].status}
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
            <Pagination
              count={noPages}
              page={page}
              defaultPage={1}
              onChange={handleChange}
            />
          </TableBody>
        </Table>

      </TableContainer>
              </Grid>
    
      </Grid>
      </Container>

      </Box>
</Box>
    </>
  )
}


export default ViewOrders