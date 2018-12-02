import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import menuIcon from '../../menu-logo.svg'
import facebookIcon from '../../facebook-logo.svg'
import twitterIcon from '../../twitter-logo.svg'

export default props =>
<AppBar background="black" position="static">
  <Toolbar>
    <Typography variant="h6" color="inherit">
      Modern and scotch
    </Typography>
    <IconButton color="inherit" aria-label="Menu">
    <img src={facebookIcon}></img>
    <img src={twitterIcon}></img>
    </IconButton>
  </Toolbar>
</AppBar>
