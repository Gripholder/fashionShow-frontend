import React from 'react';
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

const registerUser = (e) => {
    console.log(e)
}

function RegisterForm(props) {
  const { classes } = props;
  return (
    <div>
      <Typography variant="h3" color="inherit" className={classes.grow}>
        Register
      </Typography>
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" size="medium" color="primary" className={classes.button}>
        Medium
      </Button>
    </div>
  )
}

export default withStyles(styles)(RegisterForm);
