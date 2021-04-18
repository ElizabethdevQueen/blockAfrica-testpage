import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e33371",
    borderRadius: "20px",
    height: "auto",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "1rem",
    alignItems: "center"
  },
  listItem: {
    backgroundColor: "#fff",
    border: "1px solid #fff",
    borderRadius: "50%",
    height: "60px",
    width: "60px",
    display: "flex",
    alignItems: "center",
    color: theme.palette.secondary.main,
    padding: ".5rem"
  },
  listItemText: {
    color: "#fff",
    fontFamily: "Roboto",
    fontWeight: 900,
    fontSize: "2rem"
  },
  listItem2: {
    backgroundColor: "#fff",
    border: "1px solid #fff",
    borderRadius: "50%",
    height: "60px",
    width: "60px",
    paddingRight: "2px",
    color: theme.palette.primary.light,
  },
  listItemText1: {
    fontFamily: "Roboto",
    fontWeight: 900,
    fontSize: "2rem"
  }
}));

const InfoBar = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Box className={classes.root}>
        <List component="nav">
          <ListItem className={classes.listItem}>
            <ListItemText primary="AFYA" />
          </ListItem>
          <ListItem>
            <ListItemText  className={classes.listItemText} primary="143.00" />
          </ListItem>
          <ListItem >
            <ListItemText className={classes.listItemText} primary="Balance" />
          </ListItem>
        </List>
        {" "}
        <div className={classes.border}></div>
        {" "}
        <List component="nav">
          <ListItem className={classes.listItem2}>
            <ListItemText primary="ZAR" />
          </ListItem>
          <ListItem className={classes.listItemText}>
            <ListItemText primary="R21.00" />
          </ListItem>
          <ListItem className={classes.listItemText}>
            <ListItemText primary="Equivalent" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default InfoBar;
