import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField} from '@material-ui/core';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: '2vh'
  },
  button: {
    margin: theme.spacing.unit,
    display: 'block',
    margin: '2vh auto',
  },
});

class Register extends React.Component {

  // mailerlite code
  componentDidMount() {
    const js = `
      function ml_webform_success_1144196() {
        var $ = ml_jQuery || jQuery;
        $('.ml-subscribe-form-1144196 .ml-block-success').show();
        $('.ml-subscribe-form-1144196 .ml-block-form').hide();
      };
    `;
    const script = document.createElement("script");
    const scriptText = document.createTextNode(js);
    script.appendChild(scriptText);
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "https://static.mailerlite.com/js/w/webforms.min.js?vaa4d608450783acdc64d5338ff94f6d5";
    document.body.appendChild(script2);
  }

  render() {
    const {classes} = this.props;
    return (
      <section id="signup" className="gradient-gray">
      <div id="mlb2-1144196" className="ml-subscribe-form ml-subscribe-form-1144196">
      <div className="ml-vertical-align-center">
      <div className="subscribe-form ml-block-success" style={{ display: 'none' }}>
      <div className="form-section">
        <Typography color="inherit">
          Thank you, you have successfully subscribed to our announcement list!
        </Typography>
      </div>
      </div>
      <form
      className="ml-block-form"
      action="https://landing.mailerlite.com/webforms/submit/o2v5w1"
      data-code="o2v5w1"
      method="POST"
      target="_blank"
      >
      <Typography variant="h3" color="inherit" className={classes.grow}>
        Register
      </Typography>
      <div className="subscribe-form">
      <div className="form-section">
      <div
      className="form-group ml-field-email ml-validate-required ml-validate-email"
      >
      <input type="hidden" name="ml-submit" value="1" />
        <TextField
          id="outlined-email-input"
          label="Email"
          className="form-control signup-text"
          type="email"
          name="fields[email]"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          autoComplete="email"
          spellCheck="false"
          autoCapitalize="off"
          autoCorrect="off"
        />
      <Button type="submit" variant="contained" size="medium" color="primary" className={`${classes.button} primary signup-button`}>
        Submit
      </Button>
      <Button
      disabled
      style={{ display: 'none' }}
      type="button"
      className={`${classes.button} loading`}
      >
      Submitting...
      { <img
        src="https://static.mailerlite.com/images/rolling@2x.gif"
        alt="loading..."
        width="20"
        height="20"
        style={{ width: '20px', height: '20px' }}
        /> }
      </Button>
        </div>
        </div>
        </div>
        </form>
        </div>
        </div>
        </section>

    );
  }
}

export default withStyles(styles)(Register)
