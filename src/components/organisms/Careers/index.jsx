import React, {PropTypes} from 'react'
import R from 'ramda'

import { About, City, TextColumns } from '../../molecules'
import './careers.css'

const Careers = ({careers}) => (
  <div id="CAREERS" className="careers">
    <div className="careers__about">
      <About
        subtitle="Join a magnificent and fun team"
        text="At Elements you will work with colleagues who are specialized in development. Not only can you share knowledge with your co-workers but also have fun. We like to have a positive approach."
      />
    </div>
    {R.map(c =>
      <City key={c.name} city={c}>
        <TextColumns city={c} />
      </City>
    , careers)}
  </div>
)

Careers.propTypes = {
  careers: PropTypes.array.isRequired
}

export default Careers
