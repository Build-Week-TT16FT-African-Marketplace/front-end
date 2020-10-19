import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

const NavBar = withStyles ({
  root: {
    backgroundColor: '#2e3842'
      }
})(AppBar);

const LinkContainer = withStyles ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
      }
})(Toolbar);

const NavLink = withStyles ({
  root: {
    margin: '0 10% 0 3%',
    fontSize: '1.3em',
    color: 'white',
    textDecoration: 'none',
      "&:hover": {
        color: 'white',
      }
  },
})(Link);

const NavigationBar = (user) => {

    const classes = useStyles();
    const [state, setState] = React.useState({
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Home', 'About-Us', 'Meet-The-Team', 'Log-In', 'Signup'].map((text) => (
            <ListItem button key={text} component={Link} to={'/' + text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

  return (
<NavBar position="static">
<LinkContainer variant='dense'>
    <Typography variant="h6" color="inherit">
        AFRICAN MARKETPLACE
    </Typography>
    <div style={{display: 'flex', alignItems: 'center'}}>
    <Typography variant="h6" color="inherit">
        Menu
    </Typography>
    <Typography variant="h6" color="inherit">
    {['right'].map((anchor) => (
      <React.Fragment key={anchor}>
        <Button style={{color: 'white'}} onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
    </Typography>
    </div>
  </LinkContainer>
</NavBar>
  );
};

export default NavigationBar