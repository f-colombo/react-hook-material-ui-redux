import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import NavBar from './components/navbar.component';
import Footer from './components/footer.component';
import TicketList from './components/ticket-list.component';
import TicketAdd from './components/ticket-add.component';
import TicketEdit from './components/ticket-edit.component';
import UserAdd from './components/user-add.component';
import UserLogin from './components/user-login.component';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path={['/', '/tickets']} component={TicketList} />
        <Route exact path='/tickets/add' component={TicketAdd} />
        <Route exact path='/tickets/:id/edit' component={TicketEdit} />
        <Route exact path='/users/add' component={UserAdd} />
        <Route exact path='/users/login' component={UserLogin} />
      </Switch>
      <Footer></Footer>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
