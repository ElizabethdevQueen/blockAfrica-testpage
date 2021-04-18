import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cfe8fc",
    height: "auto",
    padding: "2rem",
    width: "40%"
  },
  mainBox: {
    backgroundColor: "#fff",
    height: "70vh",
    width: "60%",
    borderRadius: "3rem",
    padding: "4rem",
    border: "12px solid #000",
    margin: "0px auto"
  },
  link: {
      paddingBottom: "5rem",
      textDecoration: "underline"
  }
}));

export default function Earn() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container fluid className={classes.root}>
        <Box className={classes.mainBox}>
            <Link to="/" className={classes.link} ><a href="/home">Go to Home page</a></Link>
          <Typography>This is the EARN page</Typography>
        </Box>
      </Container>
    </>
  );
}

