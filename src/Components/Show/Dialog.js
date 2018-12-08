import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog, Toolbar, IconButton, Typography, Slide, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Stepper from './Stepper'

const styles = {
  flex: {
    flex: 1,
  },
  live: {
    paddingTop: '65vh',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  componentDidMount(){
    window.scrollTo(0,0)
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.live}>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Live Show</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
            <Toolbar>

              <Typography variant="h6" color="inherit" className={classes.flex}>
                Live Show
              </Typography>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
            <Grid container justify = "center">
              <Stepper
                dress={this.props.dress}
                activeStep={this.props.activeStep}
                handleNext={this.props.handleNext}
                handleBack={this.props.handleBack}
                rating={this.props.rating}
                />
            </Grid>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog)
