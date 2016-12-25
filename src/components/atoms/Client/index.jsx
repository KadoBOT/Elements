import React, {PropTypes} from 'react'
import isRetina from '../../../helpers/_retina'

import './client.css'

const Client = ({client}) => {
  return(
    <div className="client">
      <div className="client__logo">
        <div style={{
          'backgroundImage': `url('${isRetina ? client.logo_2x : client.logo}')`
        }}/>
      </div>
    </div>
  )
}

Client.propTypes = {
  props: PropTypes.type
}

export default Client
