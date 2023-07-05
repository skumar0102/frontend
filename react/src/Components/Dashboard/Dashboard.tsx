import React, { useEffect, useState, useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Chart from "./Chart";
import Orders from "./Orders";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Context/Theme";
import { Theme, ThemesColors } from "../../Context/Enums";
import SideAndNavbar from "./SideAndNavbar";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://ids-technologies.in/">
        IDS Infotech Ltd.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Dashboard() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigator = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigator("/");
    }
  })

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
    <SideAndNavbar/>
        <Box
          component="main"
          sx={{
            backgroundColor:
              theme === Theme.Light
                ? ThemesColors.light.Bg
                : ThemesColors.dark.Bg,
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
            
              
              <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{p:2,display:'flex',flexDirection:'column',height:250}}>
                  <Chart/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={12}>
                <Paper sx={{p:2,display:'flex',flexDirection:'column',height:310}}>
                  <Orders/>
                </Paper>
              </Grid>
              {/* <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{p:2,display:'flex',flexDirection:'column',height:240}}>
                  <Deposits/>
                </Paper>
              </Grid> */}
              
              <Grid item xs={12}>
             hello
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;
