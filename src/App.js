import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box, makeStyles } from "@material-ui/core";
import Header from "./components/Headers";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cfe8fc",
    height: "auto",
    padding: "2rem"
  },
  mainBox: {
    backgroundColor: "#fff",
    height: "100vh",
    width: "50%",
    borderRadius: "3rem",
    paddingTop: "2rem",
    border: "12px solid #000",
    margin: "auto"
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container fixed className={classes.root}>
        <Box className={classes.mainBox}>
          <Header />
          <CssBaseline />
        </Box>
      </Container>
    </>
  );
}
