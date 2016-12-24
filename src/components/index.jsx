import React from 'react'
import AOS from 'aos'

import Template from './templates'

const App = () => {
  AOS.init()

  return <Template />
}

export default App
