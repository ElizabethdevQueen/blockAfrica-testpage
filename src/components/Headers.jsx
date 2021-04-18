import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import RedLogo from "../Assets/redlogo.png";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
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
    fontSize: "2.5rem",
    fontWeight: 900
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
        fontSize: 40  
    },
    "&:hover .MuiTouchRipple-root": {
        color: theme.palette.secondary.main,
        height: "100px"
    }
  },
  content: {
    flexGrow: 1,
    '& .MuiToolbar-root': {
        padding: ".5rem"
    }
  },
}));


function Header() {
  const classes = useStyles();

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
              <div className={classes.logoText}>
                  <h1>ribbon</h1>
              </div>
            </div>
            <div className={classes.grow} />
            <div className={classes.icons}>
              <IconButton
                color="inherit"
                  className={classes.userButton}
              >
                <AccountCircleIcon />
                {/* <AccountCircleIcon style={{ color: "secondary", fontSize: 40 }} /> */}
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
