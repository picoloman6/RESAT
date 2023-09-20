import { ThunkAction } from 'redux-thunk';
import { ActionType, createReducer } from 'typesafe-actions';
import { createAsyncAction } from 'typesafe-actions';

import { RootState } from '.';
import { getItemsData } from '../apis/data';

const GET_ITEMS = 'items/GET_ITEMS';
const GET_ITEMS_SUCCESS = 'items/GET_ITEMS_SUCCESS';
const GET_ITEMS_FAILURE = 'items/GET_ITEMS_FAILURE';

const getItemsAsync = createAsyncAction(
  GET_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE
)<undefined, object[], unknown>();

type ItemsState = {
  loading: boolean;
  error: Error | null;
  items: object[];
};
type ItemsAction = ActionType<typeof getItemsAsync>;

export const getItemsThunk =
  (page: number): ThunkAction<void, RootState, null, ItemsAction> =>
  async dispatch => {
    const { request, success, failure } = getItemsAsync;
    dispatch(request());
    try {
      const data = await getItemsData(page);
      dispatch(success(data));
    } catch (e) {
      dispatch(failure(e));
    }
  };

const initialState = {
  loading: false,
  error: null,
  items: []
};

const itemReducer = createReducer<ItemsState, ItemsAction>(initialState, {
  [GET_ITEMS]: state => ({
    ...state,
    loading: true
  }),
  [GET_ITEMS_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    items: [...state.items, ...action.payload]
  }),
  [GET_ITEMS_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  })
});

export default itemReducer;
