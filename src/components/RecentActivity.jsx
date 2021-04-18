import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Typography } from "@material-ui/core";
import Ribbon from "../Assets/ribbon.jpg";
import TBXray from "../Assets/tbxray.png";
import BP from "../Assets/bloodpressure.png"

const useStyles = makeStyles({
  table: {
    minWidth: "auto"
  },
  heading: {
    marginBottom: "10px",
    paddingLeft: "1rem"
  },
  activity: {
      paddingTop: "1rem",
      paddingBottom: "2rem",
      backgroundColor: "grey",
      height: "auto"
  },
  logoDivStyle: {
    width: "30px",
    height: "50px"
  },
  logoStyle: {
    width: "40px",
    height: "40px",
    border: "1px solid #4791db",
    borderRadius: "50%",
    backgroundColor: "#4791db",
    
  },
  tableText: {
    fontWeight: 900,
    fontFamily:"Roboto",
    fontSize: "1rem"
  }
});


const RecentActivity = () => {
    const classes = useStyles();

  return (
    <Box className={classes.activity}>
      <Typography className={classes.heading}>Recent Activity:</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="medium">
          <TableBody>
              <TableRow>
                <TableCell align="left" >
                <img
                src={Ribbon}
                alt="profile"
                className={classes.logoDivStyle}
              />
                </TableCell>
                <TableCell align="left" className={classes.tableText}>HIV Blood Draw Test</TableCell>
                <TableCell align="left" className={classes.tableText}>A100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" >
                <img
                src={TBXray}
                alt="profile"
                className={classes.logoStyle}
              />
                </TableCell>
                <TableCell align="left" className={classes.tableText}>TB Radiology Xray</TableCell>
                <TableCell align="left" className={classes.tableText}>A30</TableCell>
              </TableRow>
              <TableRow >
                <TableCell align="left" >
                <img
                src={BP}
                alt="profile"
                className={classes.logoStyle}
              />
                </TableCell>
                <TableCell align="left" className={classes.tableText}>Blood Pressure Check</TableCell>
                <TableCell align="left" className={classes.tableText}>A10</TableCell>
              </TableRow>
          </TableBody>
              
        </Table>
      </TableContainer>
    </Box>
  );
}

export default RecentActivity
