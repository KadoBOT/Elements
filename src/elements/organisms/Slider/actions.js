import * as s from './actionTypes'

export const fetchCarousel = () => dispatch => {
  dispatch(s.requestCarousel()) // async

  return api.get('carousel/').then(R.compose(dispatch, s.receiveCarousel, R.prop('data'))) // handle the response
}
