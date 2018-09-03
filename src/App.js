import React, { Component } from 'react';
import './App.css';
import Pos from './pages/pos/pos'
import Exchange from './pages/exchange/exchange'
import Setting from './pages/setting/setting'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  test() {
    alert('嘿嘿2')
  }
  render() {
    return (
        <Router>
          <div className="App">
            <ul>
              <li><Link to="/">POS开单</Link></li>
              <li><Link to="/exchange">退换货</Link></li>
              <li><Link to="/setting">设置</Link></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Pos}/>
              <Route path="/exchange" component={Exchange}/>
              <Route path="/Setting" component={Setting}/>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
