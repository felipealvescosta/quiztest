import { combineReducers } from 'redux';

import category from './category/reducer';
import token from './token/reducer';

export default combineReducers({
    category,
    token,
});
