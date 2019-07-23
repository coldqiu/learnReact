import React from 'react';
import RouterMap from './router'
import {Router, Route} from 'react-router-dom'

import './App.css';
import Tabbar from './components/tabbar/'
import './static/fonts/iconfont.css'

function App() {
  return (
    <div className="App">

      <Router>
        <Route path="/">
          <RouterMap/>
          <Tabbar/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
