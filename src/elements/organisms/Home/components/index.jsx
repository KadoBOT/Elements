import React from 'react'

import { About } from '../../molecules'
import Clients from '../../../containers/Clients'
import './home.css'

const Home = () => (
  <div id="HOME" className="home">
    <About
      title="Creating rock solid applications for web and mobile"
      subtitle="Great projects for relevant companies"
      text="At Elements you will work with worldwide companies. These companies are as ambicious as all our Elements personel. Here some of the companies we have worked with:"
    />
    <Clients />
  </div>
)

export default Home
