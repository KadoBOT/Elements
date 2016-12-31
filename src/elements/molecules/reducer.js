import { combineReducers } from 'redux';

import clients from './Clients';
import footerMenu from './FooterMenu';
import headerMenu from './HeaderMenu';

console.log(`molecules`, clients, footerMenu, headerMenu)

const reducer = combineReducers({
  clients,
  footerMenu,
  headerMenu
});

export default reducer;
