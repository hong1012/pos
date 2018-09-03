/**
 * Created by hong on 2018/8/31.
 */
import React from 'react'
import {Router, Route} from 'react-router'

import App from './App'
import Test from './pages/pos/test'

class Routers extends React.Component {
  render() {
    return (
      <Router>
          <Route path="/" component={App}/>
          <Route path="/test" component={Test}/>
      </Router>
    )
  }
}
export default Routers

