import React, { useState, useEffect, useContext } from 'react';
import { http } from '../../Config/axiosConfig.js';
import { ThemeContext } from '../../Context/Theme';
import { Theme, ThemesColors } from '../../Context/Enums.js';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import SideAndNavbar from './SideAndNavbar';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  textAlign:'center'
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function ViewOrders() {
  const [Orders, setOrders] = useState<any[]>([]);
  const itemsPerPage = 8;
  const [page, setPage] = useState<any>(1);
  const [noPages, setNoPages] = useState<any>(0);
  const handleChange = ( key: any,value:any) => {
    setPage(value);
  }
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    http.get("/payment/all").then((res) => {
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
        <Table sx={{ minWidth: 700}} aria-label="customized table">
          <TableHead >
            <TableRow >
              <StyledTableCell >PAYMENT ID</StyledTableCell>
              <StyledTableCell>ORDER ID</StyledTableCell>
              <StyledTableCell align="right">AMOUNT</StyledTableCell>
              <StyledTableCell align="right">AMOUNT DUE</StyledTableCell>
              <StyledTableCell align="right">AMOUNT REFUNDED</StyledTableCell>
              <StyledTableCell align="right">CONTACT</StyledTableCell>
              <StyledTableCell align="right">EMAIL</StyledTableCell>
              <StyledTableCell align="right">CURRENCY</StyledTableCell>
              <StyledTableCell align="right">DESCRIPTION</StyledTableCell>
              <StyledTableCell align="right">METHOD</StyledTableCell>
              <StyledTableCell align="right">STATUS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(Orders).slice((page - 1) * itemsPerPage, page * itemsPerPage).map(( key: any) => (
              <StyledTableRow key={key}>
                <StyledTableCell component="th">{Orders[key].id}</StyledTableCell>
                <StyledTableCell component="th">{Orders[key].order_id}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].amount}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].amount_due}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].amount_refunded}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].contact}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].email}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].currency}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].description}</StyledTableCell>
                <StyledTableCell align="right">{Orders[key].method}</StyledTableCell>
                <StyledTableCell align="right">
                <Button disableRipple variant='outlined' startIcon={Orders[key].status == "captured" ? <CurrencyRupeeIcon/> : <AutorenewIcon/>} color={Orders[key].status == "captured" ? 'success' : 'secondary'}>
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