import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import { lightBlue, pink } from '@material-ui/core/colors';
import { Header, Footer } from './Layouts';
import Inventory from './Show/Inventory'
import Register from './Show/Register'
import Dialog from './Show/Dialog'
import { getDresses, subscribeToDress, subscribeToRating, getRating, validateCode } from './Show/Socket'
import {validateLocation, disty} from './Show/ValidateLocation'
import './App.css';

const CODE = 'C0zdq1';

const styles = theme => ({
  textField: {
    marginTop: '65vh',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    backgroundColor: 'red',
  },
  multilineColor: {
    color: 'white',
  },
});


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fdfdfd',
      main: '#e02326',
    },
    secondary: {
      main: '#ed671e',
      dark: '#2c2b2b',
    },
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      validatedLocation: false,
      validatedCode: false,
      dress: [],
      activeStep: 0,
      rating: 0,
      distance: 0,
    }

    validateLocation(valid => {
      this.setState({
        validatedLocation: valid,
        distance: disty,
      })
    })
    subscribeToDress(dress =>{
      let dresses = this.state.dress.concat(dress)
      this.setState({
        dress: dresses,
        activeStep: this.state.activeStep + 1
      })
    })

    subscribeToRating(rating => {
      this.setState({rating})
    })
    validateCode(valid => {
      this.setState({
        validateCode: valid
      })
    })
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    getDresses(dresses => {
      this.setState({
        dress: dresses
      })
    })
    getRating(this.state.activeStep)
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

  handleSubmit(e){
    e.preventDefault()
    let value = e.target.value
    if(value == CODE){
      this.setState({validatedCode: true})
    }
  }

  render() {
      const { classes } = this.props;
    return (
  <div className="bodily">
    <MuiThemeProvider theme={theme}>
      <Header />
    <div className="section1">
      <div>{this.state.distance}</div>
    {
     this.state.validatedLocation || this.state.validatedCode?
     <Dialog
       dress={this.state.dress}
       activeStep={this.state.activeStep}
       handleNext={this.handleNext}
       handleBack={this.handleBack}
       rating={this.state.rating}
       />
     :
     <TextField
       multiline
       id="filled-uncontrolled"
       label="Activation Code"
       placeholder="Ask IOSpaces admin"
       className={classes.textField}
       margin="normal"
       variant="filled"
       onChange={this.handleSubmit}
       InputProps={{
        classes: {
          input: classes.multilineColor,
          textColor: '#fff',
          color: '#fff',
        },
      }}
      InputLabelProps={{
        style: {
          width: '85%',
          color: '#fff'
        } }}
        />
   }
    </div>
      <div className="section2">
        <Inventory />
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
