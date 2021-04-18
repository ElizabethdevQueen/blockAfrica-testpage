import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box, makeStyles } from "@material-ui/core";
import Header from "../components/Headers";
import InfoBar from "../components/InfoBar";
import SelectCurrency from "../components/SelectCurrency";
import RecentActivity from "../components/RecentActivity";
import FooterNavbar from "../components/FooterNavbar";
import StatusBar from "../Assets/statusbar.png"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cfe8fc",
    height: "auto",
    padding: "2rem",
    width: "80%"
  },
  mainBox: {
    backgroundColor: "#fff",
    height: "auto",
    width: "40%",
    borderRadius: "3rem",
    border: "12px solid #000",
    margin: "auto"
  },
  statusbar: {
    borderRadius: "2px",
    borderTopColor: "#000"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container fixed className={classes.root}>
        <Box className={classes.mainBox}>
        <img src={StatusBar} alt="profile" className={classes.statusbar} />
          <Header />
          <InfoBar />
          <SelectCurrency />
          <RecentActivity />
          <FooterNavbar />
        </Box>
      </Container>
    </>
  );
}
