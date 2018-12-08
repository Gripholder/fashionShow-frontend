import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from "react-star-rating-component";
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { submitRating, getRating } from './Socket'


const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 600,
    maxWidth: 755,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
});

class TextMobileStepper extends React.Component {
  onStarClick(nextValue) {
    submitRating(this.props.activeStep, nextValue)
  }
  render() {
    const { classes, theme, activeStep, rating } = this.props;
    const maxSteps = this.props.dress.length;

    return (
      <div className={classes.root}>
        <img
          className={classes.img}
          src={this.props.dress[activeStep].image}
          alt={this.props.dress[activeStep].name}
        />
        <Paper square elevation={0} className={classes.header}>
        <Typography>{this.props.dress[activeStep].name}</Typography>
        </Paper>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.props.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.props.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

TextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);
