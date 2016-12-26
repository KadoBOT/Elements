import React from 'react'
import Sticky from 'react-stickynode'

import './parallax.css'

const Parallax = (props) => (
  <div className="parallax--wrapper">
    <div className="parallax--end" />
    <Sticky enabled={true} top={100} bottomBoundary=".parallax--wrapper">
      <div
        className="parallax parallax__polygon"
        data-aos="fade-left"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className="parallax parallax__android__icon" />
      </div>
      <div
        className="parallax parallax__android__phone"
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-bottom"
      />
    </Sticky>
    <Sticky enabled={true} top={300} bottomBoundary=".parallax--end">
      <div
        className="parallax parallax__polygon__ios"
        data-aos="fade-right"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className="parallax parallax__ios__icon" />
      </div>
      <div
        className="parallax parallax__ios__phone"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-easing="linear"
      />
    </Sticky>
  </div>
)

export default Parallax
