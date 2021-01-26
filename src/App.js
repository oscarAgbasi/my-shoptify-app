import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';
import './App.css';



function App() {
  return (
      <Router>
        <Layout />
      </Router>
  );
}

export default App;
