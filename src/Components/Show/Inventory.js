import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MobileStepper, Paper, Typography, Button } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const dresses = [
  {
    name: 'Vitale Barberis Canonico - Burgundy',
    image:
      'https://connaisseurparis.com/wp-content/uploads/2018/08/0772FC85-D61D-4096-9FB8-075FCDBE7B59-682x1024-266x400.jpeg',
    src: 'https://connaisseurparis.com/product/vitale-barberis-canonico-burgundy-with-blue-and-white-plaid-2-piece-slim-fit-suit/'
  },
  {
    name: 'Vitale Barberis Canonico - Navy Blue',
    image:
      'https://connaisseurparis.com/wp-content/uploads/2018/08/D61A7128-291D-43D6-9809-8ED7E3FB07A1-682x1024-266x400.jpeg',
    src: 'https://connaisseurparis.com/product/vitale-barberis-canonico-navy-blue-with-green-plaid-2-piece-slim-fit-suit/'
  },
  {
    name: 'Priatist - Navy blue',
    image:
      'https://connaisseurparis.com/wp-content/uploads/2018/08/83398DA4-EB3B-4197-BB5D-E1DD1DCDA54D-682x1024-266x400.jpeg',
    src: 'https://connaisseurparis.com/product/primatist-navy-blue-with-burgundy-dots-3-piece-slim-fit-suit/'
  },
  {
    name: 'Primatist - Blue',
    image:
      'https://connaisseurparis.com/wp-content/uploads/2018/08/A5E70E4A-4005-41E6-A18E-7B6C970FB635-682x1024-266x400.jpeg',
    src: 'https://connaisseurparis.com/product/primatist-blue-3-piece-slim-fit-suit/'
  },
  {
    name: 'Connaisseur - Burgundy',
    image:
      'https://connaisseurparis.com/wp-content/uploads/2018/08/9E4B0D71-1EB8-4891-9B21-FBC3D4FD54B1-682x1024-266x400.jpeg',
    src: 'https://connaisseurparis.com/product/connaisseur-burgundy-and-gold-floral-pattern-3-piece-slim-fit-tuxedo/'
  },
  {
    name: 'Connaisseur - Black and Gold',
    image:
      'https://connaisseurparis.com/wp-content/uploads/2018/08/83A27540-00FB-4A6E-A193-9B72A4FAF951-682x1024-266x400.jpeg',
    src: 'https://connaisseurparis.com/product/connaisseur-black-and-gold-paisley-pattern-3-piece-slim-fit-tuxedo/'
  },
  {
    name: 'Connaisseur - Navy blue',
    image:
      'https://connaisseurparis.com/wp-content/uploads/2018/08/5FFE2FBB-3D57-483C-8F69-5386C2EBF75B-682x1024-266x400.jpeg',
    src: 'https://connaisseurparis.com/product/connaisseur-navy-blue-check-pattern-3-piece-slim-fit-tuxedo/'
  },
  {
    name: 'Connaisseur - Pulm Purple',
    image:
      'https://connaisseurparis.com/wp-content/uploads/2018/08/5BBC1397-41DE-4CC5-B555-B027E4A728A8-682x1024-266x400.jpeg',
    src: 'https://connaisseurparis.com/product/connaisseur-plum-purple-and-gold-camouflage-pattern-3-piece-slim-fit-tuxedo/'
  },
];

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
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
});

class Inventory extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeStep: 0,
    }
  }
  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = dresses.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{dresses[activeStep].name}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {dresses.map((step, index) => (
            <a key={index} href={step.src} target="_blank">
            <div>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.image} alt={step.name} label={step.name}/>
              ) : null}
            </div>
          </a>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

Inventory.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Inventory)
