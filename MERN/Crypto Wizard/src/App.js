import "./App.css";
import {BrowserRouter,Route} from 'react-router-dom';
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";
import {makeStyles} from "@material-ui/core";
import Footer from "./components/Footer";


function App() {
  const useStyles=makeStyles( ()=> ({
    App:{
      backgroundColor:"#14161a",
      color:"white",
      minHeight:"100vh"
    }
  }))

  const classes=useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <div>
        <Header />
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} exact />         
          <Footer/>     
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
