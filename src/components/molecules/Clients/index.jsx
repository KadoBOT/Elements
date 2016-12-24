import React, {PropTypes} from 'react'
import R from 'ramda'

import { Client } from '../../atoms'
import { Text } from '../../atoms/Text'

import './clients.css'

class Clients extends React.Component {
  componentWillMount(){
    const { fetchClients } = this.props
    fetchClients()
  }

  render() {
    const { clients, running } = this.props
    const isLoading = running || !clients

    if(isLoading) {
      return <div>Loading...</div>
    }

    return(
      <div
        className="clients"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-center"
      >
        {R.map(c =>
          <Client client={c}/>
        , clients.results)}
        <Text>
          Discover many more, or else you can contact us for more information.
        </Text>
      </div>
    )
  }
}

Clients.propTypes = {
  props: PropTypes.type
}

export default Clients
