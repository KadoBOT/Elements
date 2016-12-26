import React from 'react'

import { Header, Home, Blog, Footer } from '../organisms'
import Slider from '../../containers/Slider'
import Careers from '../../containers/Careers'
import CommentArea from '../../containers/CommentArea'
import Contact from '../../containers/Contact'
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

export default App
