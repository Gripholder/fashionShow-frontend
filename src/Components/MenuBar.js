import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import menuIcon from './menu.svg'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  console.log(props)
  return (
    <div className={classes.root}>
      <AppBar background="black" position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Modern and scotch
          </Typography>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <img src={menuIcon}></img>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
