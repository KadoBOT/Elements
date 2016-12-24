import React, {PropTypes} from 'react'
import Carousel from 'nuka-carousel'
import R from 'ramda'

import { SliderContent } from '../../molecules'
import isRetina from '../../../helpers/_retina'
import './slider.css'

const style  = {
  color: 'rgba(255, 255, 255, 0.61)',
  fontSize: '128px',
  padding: '20px',
  cursor: 'pointer'
}

const Decorators = [{
  component: React.createClass({
    render() {
      return (
        <span
          onClick={this.props.previousSlide}>
          &lsaquo;
        </span>
      )
    }
  }),
  position: 'CenterLeft',
  style,
},
{
  component: React.createClass({
    render() {
      return (
        <span
          onClick={this.props.nextSlide}>
          &rsaquo;
        </span>
      )
    }
  }),
  position: 'CenterRight',
  style,
},
{
  component: React.createClass({
    render() {
      var self = this;
      var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
      return (
        <ul style={self.getListStyles()}>
          {
            indexes.map(function(index) {
              return (
                <li style={self.getListItemStyles()} key={index}>
                  <button
                    style={self.getButtonStyles(self.props.currentSlide === index)}
                    onClick={self.props.goToSlide.bind(null, index)}>
                    &bull;
                  </button>
                </li>
              )
            })
          }
        </ul>
      )
    },
    getIndexes(count, inc) {
      var arr = [];
      for (var i = 0; i < count; i += inc) {
        arr.push(i);
      }
      return arr;
    },
    getListStyles() {
      return {
        position: 'relative',
        margin: 0,
        top: -10,
        padding: 0
      }
    },
    getListItemStyles() {
      return {
        listStyleType: 'none',
        display: 'inline-block'
      }
    },
    getButtonStyles(active) {
      return {
        border: 0,
        background: 'transparent',
        color: 'white',
        cursor: 'pointer',
        padding: 10,
        outline: 0,
        fontSize: 56,
        opacity: active ? 1 : 0.5
      }
    }
  }),
  position: 'BottomCenter'
}]

class Slider extends React.Component {
  componentWillMount() {
    const { fetchCarousel } = this.props
    fetchCarousel()
  }

  render() {
    const { running, carousel } = this.props
    const isLoading = running || !carousel

    if(isLoading) {
      return <div>Loading...</div>
    }


    return(
      <div className="slider__wrapper">
        {/* <SliderContent /> */}
        <Carousel
          autoplay={true}
          decorators={Decorators}
          wrapAround={true}
        >
          {R.map(c =>
            <SliderContent
              carousel={c}
              image={isRetina ? c.image_2x : c.image}
            />
          , carousel.results)}
        </Carousel>
      </div>
    )
  }
}

Slider.propTypes = {
  props: PropTypes.type
}

export default Slider
