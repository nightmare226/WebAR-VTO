import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import './styles/index.scss'

import DemosMenu from './js/components/DemosMenu'

import DemoEarrings3D from './js/demos/Earrings3D.js'

render(
  <AppContainer>
    <Router>
      <Switch>

        <Route path="/earrings3D">
          <DemoEarrings3D />
        </Route>

        <Route path="/">
          <DemosMenu />
        </Route>

      </Switch>
    </Router>
  </AppContainer>,
  document.querySelector('#root')
);