import React,{useState,useContext} from 'react'
import { ThemeContext } from "../../Context/Theme";
import { Theme, ThemesColors } from "../../Context/Enums";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { http } from "../../Config/axiosConfig";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import { FormGroup, FormControlLabel } from "@mui/material";
import { Button } from "@mui/material";
// sidebar
import logo from "../../img/logo.gif";
import { mainListItems, secondaryListItems } from "./listItems";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {Drawer,MaterialUISwitch,AppBar} from './style';


function SideAndNavbar() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [open, setOpen] = useState(true);
  const navigator = useNavigate();

    const toggleDrawer = () => {
      setOpen(!open);
    };
    const handleToggle = () => {
        if (theme === Theme.Light) {
          setTheme(Theme.Dark);
        } else {
          setTheme(Theme.Light);
        }
      };

      const handleLogout = () => {
        http
          .get("/auth/logout")
          .then((res) => {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            Swal.fire({
              toast: true,
              position: "bottom-end",
              icon: "success",
              title: "Logout successfully Done !",
              showConfirmButton: false,
              timer: 3000,
              // background: "#4aa3d1",
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });
            navigator("/");
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
  return (
    <>
    <Box sx={{ display: "flex" }}>
        <AppBar
          position="absolute"
          open={open}
          sx={{
            // zIndex: 1,
            color:
              theme === Theme.Light
                ? ThemesColors.light.textColor
                : ThemesColors.dark.textColor,
            backgroundColor:
              theme === Theme.Light
                ? ThemesColors.light.Nav
                : ThemesColors.dark.Nav,
          }}
        >
          <Toolbar
            sx={{
              pr: "24px",
              // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <Button variant="contained" color="error" onClick={handleLogout}>
              Sign Out
            </Button>
            <FormGroup>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    onClick={handleToggle}
                    sx={{ m: 1 }}
                    defaultChecked
                  />
                }
                label=""
              />
            </FormGroup>
          </Toolbar>
        </AppBar>

         {/* sidebar */}
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <img
              src={logo}
              alt=""
              height="80px"
              width="150px"
              style={{ padding: 10 }}
            />
            {/* <h3>IDS INFOTECH LTD.</h3> */}
            {/* <h3>Admin MENU</h3> */}

            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" >
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        </Box>
    </>
  )
}

export default SideAndNavbar