import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { Container } from "@material-ui/core";
// import TV from "@material-ui/icons/Tv";
import Popular from "./Pages/Popular/Popular";
import Search from "./Pages/Search/Search";
import Playing from "./Pages/Playing/Playing";
import Series from "./Pages/Series/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Container>
          <Switch>
            <Route path='/' component={Popular} exact />
            <Route path='/playing' component={Playing} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
