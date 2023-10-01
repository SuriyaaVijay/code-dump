import {
  AppBar,
  MenuItem,
  Toolbar,
  Typography,
  Select,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
const Header = () => {
  const useStyles = makeStyles(() => ({
    title: {
      flex: 1,
      color: "Orange",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  const classes = useStyles();
  const history = useHistory();
  const { currency, setCurrency } = CryptoState();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  // console.log(currency);
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              className={classes.title}
              onClick={() => history.push("/")}
              variant="h6"
            >
              Crypto Wizard
            </Typography>
            <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginRight: 15 }}
              value={currency}
              onChange={(e)=> setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
