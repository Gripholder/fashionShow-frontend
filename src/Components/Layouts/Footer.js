import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import facebook from '../../Icons/facebook-logo.svg'
import twitter from '../../Icons/twitter-logo.svg'
import instagram from '../../Icons/instagram-logo.svg'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '10vh',
  },
  margin: {
    margin: theme.spacing.unit,
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <BottomNavigation
        className={classes.root}
      >
      <Grid container spacing={16}>
        <Grid item xs>
          <a href="https://www.facebook.com/events/366172560792981/">
        <BottomNavigationAction label="Facebook" icon={<img src={facebook}></img>} />
        </a>
        </Grid>
        <Grid item xs>
          <a href="https://twitter.com/iospaces?lang=en">
        <BottomNavigationAction label="Twitter" icon={<img src={twitter}></img>} />
        </a>
        </Grid>
        <Grid item xs>
          <a href="https://www.instagram.com/iospaces/?hl=en">
        <BottomNavigationAction label="Instagram" icon={<img src={instagram}></img>} />
        </a>
        </Grid>
        <Grid container spacing={16}>
            <Grid item xs>
              <Button href="https://iospaces.com/s-event/scotch-modern-a-fall-trunk-show/" size="large" color="primary" className={classes.margin}>About</Button>
            </Grid>
            <Grid item xs>
              <Button href="https://iospaces.com/contact/" size="large" color="primary" className={classes.margin}>Contact</Button>
          </Grid>
        </Grid>
        </Grid>
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
