import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import GridViewIcon from '@mui/icons-material/GridView';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const mainListItems = (
    <React.Fragment >
      <ListItemButton>
        <ListItemIcon>
          <GridViewIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingBagIcon />
        </ListItemIcon>
        <ListItemText primary="Make Order" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <RemoveRedEyeIcon />
        </ListItemIcon>
        <ListItemText primary="View Orders" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <RemoveRedEyeIcon />
        </ListItemIcon>
        <ListItemText primary="View Payments" />
      </ListItemButton>
      {/* <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItemButton> */}
    </React.Fragment>
  );
  
  export const secondaryListItems = (
    <React.Fragment>
      {/* <ListSubheader component="div" inset>
        Profile
      </ListSubheader> */}
      <ListItemButton>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItemButton>
    </React.Fragment>
  );