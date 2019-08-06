import React from 'react'

import Routes from './Routes'
import { Navbar } from './components/Navbar'

export default props => (
  <div className='container'>
    <Navbar />
    <Routes />
  </div>
)
