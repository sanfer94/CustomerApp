import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {

  
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/customers">Customers</Link>
          <Link to="/customers/3000000">Customer 30000000</Link>
        </div>
      </Router>
    );
  }
}

export default App;
