import React, {
  Component
} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import pink from '@material-ui/core/colors/pink';
import Section2 from './Show/Section2'
import Register from './Show/Register'
import Dialog from './Show/Dialog'
import { Header, Footer } from './Layouts';
import { subscribeToDress } from './Show/Socket'
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
      dress: [
        {
          name: "Placeholder1",
          image: "https://connaisseurparis.com/wp-content/uploads/2018/08/315731B5-2E97-41F4-A433-A323E8FEE9B1-682x1024-266x400.jpeg"
        },
        {
          name: "Placeholder2",
          image: "https://connaisseurparis.com/wp-content/uploads/2018/08/315731B5-2E97-41F4-A433-A323E8FEE9B1-682x1024-266x400.jpeg"
        },
      ],
      activeStep: 0,
    }
    subscribeToDress(dress =>{
      console.log(dress)
      let dresses = this.state.dress.concat(dress)
      this.setState({
        dress: dresses,
        activeStep: this.state.activeStep + 1
      })
    })


    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }
  handleNext() {
    let step = this.state.activeStep + 1
    this.setState({
      activeStep: step
    })
  }

  handleBack() {
    let step = this.state.activeStep
    if(step > 0){
      step--
      this.setState({
        activeStep: step
      })
    }
  }

  render() {
      const { classes } = this.props;
    return (
  <div>
    <MuiThemeProvider theme={theme}>
      <Header />
    <div style={{textAlign: 'center'}}>
    <div className="section1">
    {
     this.state.validatedLocation? <Dialog dress={this.state.dress} activeStep={this.state.activeStep} handleNext={this.handleNext} handleBack={this.handleBack}/>: <h1>Location not validated, please refresh page when at IO Spaces</h1>
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
