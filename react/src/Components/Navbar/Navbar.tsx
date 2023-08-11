import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";
import { FormGroup, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeContext } from "../../Context/Theme";
import { Lang, LangSelect, Theme, ThemesColors } from "../../Context/Enums";
import { LangContext } from "../../Context/Language";
import logo from '../../img/logo.gif';
import {MaterialUISwitch} from '../Dashboard/style';
const drawerWidth: number = 240;


function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLanguage, data } = useContext(LangContext);
  let languageBasedContent: any = data;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLang = () => {
    setLanguage(Lang.Hin);
  };

  const handleToggle = () => {
    if (theme === Theme.Light) {
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        IDS INFOTECH LTD.
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"About"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Contact"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"SignUp"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"SingIn"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
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
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography 
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <img src={logo} alt="" height={50}/>

              {/* IDS INFOTECH LTD. */}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button>
                <Link
                  href="/"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "#fff" }}
                >
                  {languageBasedContent.main.Navbar[0]}
                </Link>
              </Button>
              <Button>
                <Link
                  href="/"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "#fff" }}
                >
                  {languageBasedContent.main.Navbar[1]}
                </Link>
              </Button>
              <Button>
                <Link
                  href="/"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "#fff" }}
                >
                  {languageBasedContent.main.Navbar[2]}
                </Link>
              </Button>
              <Button>
                <Link
                  href="/"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "#fff" }}
                >
                  {languageBasedContent.main.Navbar[3]}
                </Link>
              </Button>
              <Button>
                <Link
                  href="/"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "#fff" }}
                >
                  {languageBasedContent.main.Navbar[4]}
                </Link>
              </Button>
            </Box>
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
            {/* <Button onClick={handleLang}>Hin</Button> */}
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
