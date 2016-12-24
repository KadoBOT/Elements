import React, {PropTypes} from 'react'

import {CommentArea, Header, Home, Blog, Contact, Footer} from '../organisms'
import Slider from '../../containers/Slider'
import Careers from '../../containers/Careers'
import './main.css'

const App = () => (
  <div>
    <div>
      <Header />
      <Slider />
    </div>
    <div className="template__middle">
      <Home />
      <Careers />
      <Blog />
      <CommentArea />
      <Contact />
    </div>
    <Footer />
  </div>
)

App.propTypes = {
  props: PropTypes.type
}

export default App
