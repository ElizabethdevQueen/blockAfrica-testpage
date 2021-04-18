import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Home from "../Assets/homeicon.png";
import Activity from "../Assets/activity.png";
import Wallet from "../Assets/wallet.jpg";
import Market from "../Assets/market.png";
import Earn from "../Assets/earn.jpg";
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  footerBody: {
    backgroundColor: "#CCC9C9",
  },
  footerText: {
    color: "red",
    fontSize: "1rem",
    fontWeight: 500,
    paddingTop: "5px"
  },
  root: {
    flexGrow: 1,
    padding: "1rem",
    alignItems: "center",
    display: "flex",
    paddingLeft: "2rem",
  },
  logoDivStyle: {
    width: "38px",
    height: "38px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const FooterNavbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Link to="/" className={classes.paper} item xs={6} sm={3}>
          <img src={Home} alt="profile" className={classes.logoDivStyle} />
          <Typography className={classes.footerText}>Home</Typography>
        </Link>
        <Link to="/activity" className={classes.paper} item xs={6} sm={3}>
          <img src={Activity} alt="profile" className={classes.logoDivStyle} />
          <Typography className={classes.footerText}>Activity</Typography>
        </Link>
        <Link to="/wallet" className={classes.paper} item xs={6} sm={3}>
          <img src={Wallet} alt="profile" className={classes.logoDivStyle} />
          <Typography className={classes.footerText}>Wallet</Typography>
        </Link>
        <Link to="/market" className={classes.paper} item xs={6} sm={3}>
          <img src={Market} alt="profile" className={classes.logoDivStyle} />
          <Typography className={classes.footerText}>Market</Typography>
        </Link>
        <Link to="/earn" className={classes.paper} item xs={6} sm={3}>
          <img src={Earn} alt="profile" className={classes.logoDivStyle} />
          <Typography className={classes.footerText}>Earn</Typography>
        </Link>
      </Grid>
    </div>
  );
};

export default FooterNavbar;
