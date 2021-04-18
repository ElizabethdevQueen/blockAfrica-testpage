import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import { Avatar, Divider, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F93476",
    borderRadius: "20px",
    height: "auto",
    padding: ".5rem",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "1rem",
    alignItems: "center"
  },
  border: {
    height: "170px",
    backgroundColor: "white"
  },
  infoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    backgroundColor: "#fff",
    padding: 30
  },
  afya: {
    color: "#D63227",
    fontWeight: 700
  },
  zar: {
    color: "#0AC4E9",
    fontWeight: 700
  },
  infoText: {
    color: "#fff",
    fontSize: "2rem"
  },
  infoSubText: {
    color: "#fff",
    fontSize: ".8rem"
  }
}));

const InfoBar = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Box className={classes.root}>
        <Box className={classes.infoBox}>
          <Avatar className={classes.avatar}>
            <Typography component="h1" className={classes.afya}>AFYA</Typography>
          </Avatar>
          <Typography className={classes.infoText}>143.00</Typography>
          <Typography className={classes.infoSubText}>Balance</Typography>
        </Box>
        {" "}
        <Divider orientation="vertical" className={classes.border} />
        {" "}
        <Box className={classes.infoBox}>
          <Avatar className={classes.avatar}>
          <Typography component="h1" className={classes.zar}>ZAR</Typography>
          </Avatar>
          <Typography className={classes.infoText}>R21.00</Typography>
          <Typography className={classes.infoSubText}>Equivalent</Typography>
        </Box>
      </Box>
    </>
  );
};

export default InfoBar;
