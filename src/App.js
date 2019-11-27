import React, { Component } from 'react';
import './App.css';
import { Switch,
  Route,
  BrowserRouter } from 'react-router-dom';
  import Layout from './components/Layout';
  import Login from './pages/LoginPage';
  import Notes from './pages/NotesPage';
  import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
  return (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={ Login } /> 
        <Route exact path='/pages/NotesPage' component={ Notes } />
     </Switch>
    </Layout>
  </BrowserRouter>
  );
  }
}

export default App;
