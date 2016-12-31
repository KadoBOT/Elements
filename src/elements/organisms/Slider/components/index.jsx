import React, {PropTypes} from 'react'
import Carousel from 'nuka-carousel'
import R from 'ramda'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { SliderContent } from '../../molecules'
import isRetina from '../../../helpers/_retina'
import './slider.css'

const style  = {
  color: 'rgba(255, 255, 255, 0.61)',
  fontSize: '8.53vw',
  padding: '1.33vw',
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
        top: '0.66vw',
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
        padding: '0.66vw',
        outline: 0,
        fontSize: '3.73vw',
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
        <Carousel
          autoplay={true}
          decorators={Decorators}
          wrapAround={true}
        >
          {R.map(c =>
            <SliderContent
              carousel={c}
              image={isRetina ? c.image_2x : c.image}
              key={c}
            />
          , carousel.results)}
        </Carousel>
      </div>
    )
  }
}

Slider.propTypes = {
  running: PropTypes.bool,
  carousel: PropTypes.any
}

const mapStateToProps = state => ({
  running: state.carousel.running,
  carousel: state.carousel.carousel,
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
