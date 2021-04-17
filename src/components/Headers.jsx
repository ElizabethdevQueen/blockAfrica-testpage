import React, { useState } from "react";
import clsx from "clsx";
import { fade, makeStyles } from "@material-ui/core/styles";
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import RedLogo from "../Assets/redlogo.png";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  capitalize: {
    textTransform: "capitalize",
    color: theme.palette.grey[900],
  },
  logoDivStyle: {
    width: "90px",
    height: "60px"
  },
  logoStyle: {
    display: "flex",
    alignItems: "center"
  },
  logoText: {
    color: theme.palette.secondary.main,
    fontSize: "2rem"
  },
  icons: {
    width: "120px",
    margin: theme.spacing(0, 2),
  },
  iconButtonStyle: {
    // backgroundColor: theme.palette.secondary.light,
    "& .MuiSvgIcon-root": {
        color: theme.palette.secondary.main,
        // height: "100px"
    }
  },
  userButton: {
    //   height: "100px"
    "& .MuiSvgIcon-root": {
        color: theme.palette.secondary.main,
        // height: "100px"
    },
    "&:hover .MuiTouchRipple-root": {
        color: theme.palette.secondary.main,
        border: "none"
    }
  },
  content: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  //   const [open, setOpen] = useState(false);

  const formatEmail = (email = "") => {
    const result = email.substring(0, email.indexOf("@"));
    return `${result}...`;
  };

  return (
      <section className={classes.content}>
        <div className={classes.grow}>
          <Toolbar>
            <div className={classes.logoStyle}>
              <img
                src={RedLogo}
                alt="profile"
                className={classes.logoDivStyle}
              />
              <Typography className={classes.logoText}>
                  <h1>ribbon</h1>
              </Typography>
            </div>
            <div className={classes.grow} />
            <div className={classes.icons}>
              <IconButton
                color="inherit"
                  className={classes.userButton}
              >
                <AccountCircleIcon />
              </IconButton>{" "}
              &nbsp;
              <IconButton
                aria-label="show 17 new notifications"
                color="default"
                  className={classes.iconButtonStyle}
              >               
                  <NotificationsActiveIcon />
              </IconButton>
            </div>
          </Toolbar>
        </div>
      </section>
  );
}

export default Header;
