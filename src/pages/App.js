import React from 'react'
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Home from './Home'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  )
}

export default App