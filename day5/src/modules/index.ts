import { combineReducers } from 'redux';

import itemReducer from './items';
import photoReducer from './photos';

const rootReducer = combineReducers({
  itemReducer,
  photoReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
