import { combineReducers } from 'redux';

import molecules from '../molecules/reducer';
import organisms from '../organisms/reducer';

console.log(`templates`, molecules, organisms)

const rootReducer = combineReducers({
  molecules,
  organisms
});

export default rootReducer;
