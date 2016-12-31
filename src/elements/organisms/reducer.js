import { combineReducers } from 'redux';

import commentArea from './CommentArea';
import contact from './Contact';
import slider from './Slider';

console.log(`molecules`, commentArea, contact, slider)

const reducer = combineReducers({
  contact,
  commentArea,
  slider
});

export default reducer;
