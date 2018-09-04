import React, { Component } from 'react';
import './App.css';
import Pos from './pages/pos/pos'
import Exchange from './pages/exchange/list'
import Detail from './pages/exchange/detail'
import Setting from './pages/setting/setting'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  test() {
    alert('嘿嘿2')
  }
  render() {
    return (
        <Router basename="/testbase">
          <div className="App">
            <ul className="menu">
              <li><Link to="/" replace>POS开单</Link></li>
              <li><Link to="/exchange/list" replace>退换货</Link></li>
              <li><Link to="/setting" replace>设置</Link></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Pos}/>
              <Route path="/exchange/list" component={Exchange}/>
              <Route path="/setting" component={Setting}/>
              <Route path="/exchange/detail/:billNo" component={Detail}/>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
