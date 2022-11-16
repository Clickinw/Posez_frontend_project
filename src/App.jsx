import React from 'react';
import './App.css';
import Logo from './component/Logo';
import HomeUser from './component/user/HomeUser';
import Menu from './component/user/Menu';
import List from './component/user/List';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Logo />
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' component={HomeUser} />
        <Route path='/menu' component={Menu} />
        <Route path='/list' component={List} />
      </Router>
    </>
  );
}

export default App;
