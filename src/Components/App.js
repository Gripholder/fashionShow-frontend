import React, {
  Component
} from 'react';
import { ConnectedWifiInfo } from './Show';
import Button from './Show/Button'
import Section2 from './Show/Section2'
import Section3 from './Show/Section3'
import Dialog from './Show/Dialog'
import { Header, Footer } from './Layouts';
import { subscribeToDress } from './Show/Socket'
import { validateLocation } from './Show/ValidateLocation'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      validatedLocation: true,
      latitude: 0,
      longtitude: 0,
      dress: [
        {
          name: "BLa Bla",
          image: "https://connaisseurparis.com/wp-content/uploads/2018/08/315731B5-2E97-41F4-A433-A323E8FEE9B1-682x1024-266x400.jpeg"
        },
        {
          name: "BLa",
          image: "https://connaisseurparis.com/wp-content/uploads/2018/08/315731B5-2E97-41F4-A433-A323E8FEE9B1-682x1024-266x400.jpeg"
        },
      ],
      activeStep: 0,
    }
    subscribeToDress(dress =>{
      console.log(dress)
      let dresses = this.state.dress.concat(dress)
      this.setState({
        dress: dresses
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
        <Section3 />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  </div>
    );
  }
}

export default App;
