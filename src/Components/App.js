import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue, pink } from '@material-ui/core/colors';
import { Header, Footer } from './Layouts';
import Section2 from './Show/Section2'
import Register from './Show/Register'
import Dialog from './Show/Dialog'
import { getDresses, subscribeToDress, subscribeToRating, getRating } from './Show/Socket'
import { validateLocation } from './Show/ValidateLocation'
import './App.css';

const styles = {};


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F2EAE3',
      main: '#fe5400',
    },
    secondary: {
      main: '#EEF0F1',
      dark: '#0B0B0C',
    },
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      validatedLocation: true,
      dress: [],
      activeStep: 0,
      rating: 0,
    }

    subscribeToDress(dress =>{
      console.log(dress)
      let dresses = this.state.dress.concat(dress)
      this.setState({
        dress: dresses,
        activeStep: this.state.activeStep + 1
      })
    })

    subscribeToRating(rating => {
      console.log('updating rating')
      this.setState({
        rating: rating
      })
    })
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  componentDidMount() {
    getDresses(dresses => {
      this.setState({
        dress: dresses
      })
    })
  }

  handleNext() {
    let step = this.state.activeStep + 1
    this.setState({
      activeStep: step
    })
    getRating(step)
  }

  handleBack() {
    let step = this.state.activeStep
    if(step > 0){
      step--
      this.setState({
        activeStep: step
      })
      getRating(step)
    }
  }

  render() {
      const { classes } = this.props;
    return (
  <div className="bodily">
    <MuiThemeProvider theme={theme}>
      <Header />
    <div className="section1">
    {
     this.state.validatedLocation?
     <Dialog
       dress={this.state.dress}
       activeStep={this.state.activeStep}
       handleNext={this.handleNext}
       handleBack={this.handleBack}
       rating={this.state.rating}
       />
     : <h1>Location not validated, please refresh page when at IO Spaces</h1>
   }
    </div>
      <div className="section2">
        <Section2 />
      </div>
      <div className="section3">
        <Register />
      </div>
      <div>
      <Footer />
      </div>
  </MuiThemeProvider>
  </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
