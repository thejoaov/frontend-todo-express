import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import { Todo } from './components/Todo'
import { About } from './components/About'

export default props => (
  <BrowserRouter>
    <Switch>
      <Route path='/todos' component={Todo} />
      <Route path='/about' component={About} />
      <Redirect from='*' to='/todos' />
    </Switch>
  </BrowserRouter>
)
