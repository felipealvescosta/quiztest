import { combineReducers } from 'redux';

import category from './category/reducer';
import score from './score/reducer';

export default combineReducers({
    category,
    score,
});
