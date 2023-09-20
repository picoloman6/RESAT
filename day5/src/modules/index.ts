import { combineReducers } from 'redux';
import itemReducer from './items';

const rootReducer = combineReducers({
  itemReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
