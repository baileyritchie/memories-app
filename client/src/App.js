import React from 'react';
import {Container} from '@material-ui/core';
import Navbar from '../src/components/Navbar/Navbar'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import useStyles from './styles';
const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/auth" component={Auth}/>
        </Switch>
      </Container>
    </BrowserRouter>
    
  )
}

export default App;