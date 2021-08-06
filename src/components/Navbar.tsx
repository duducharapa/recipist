import React from 'react';
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import KitchenIcon from '@material-ui/icons/Kitchen';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import RecipeIcon from '@material-ui/icons/Fastfood';

import MenuItem from './MenuItem';

const styles = makeStyles({
  list: {
    width: 250
  }
});

function Navbar() {
  const classes = styles();
  const [open, openAndClose] = React.useState(false);
  
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    openAndClose(open);
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Recipist
          </Typography>
        </Toolbar>
      </AppBar>
      <React.Fragment>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          <List className={classes.list}>
            <MenuItem text="Início">
              <HomeIcon />
            </MenuItem>
            <Divider />
            <MenuItem text="Perfil">
              <PersonIcon />
            </MenuItem>
            <Divider />
            <MenuItem text="Receitas">
              <RecipeIcon />
            </MenuItem>
            <Divider />
            <MenuItem text="Produtos">
              <KitchenIcon />
            </MenuItem>
          </List>
        </Drawer>
      </React.Fragment>
    </React.Fragment>
  );
}

export default Navbar;
