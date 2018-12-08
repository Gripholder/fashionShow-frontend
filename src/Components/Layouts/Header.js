import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar} from '@material-ui/core';
import logo from '../../Icons/logo.svg'

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  logo: {
    width: '20vh',
    height: 'auto',
    margin: 'auto',
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar background="black" position="static">
        <Toolbar>
          <img src={logo} className={classes.logo}></img>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
