import { createAsyncAction } from 'typesafe-actions';

export const GET_ITEMS = 'items/GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'items/GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'items/GET_ITEMS_FAILURE';

export const getItemsAsync = createAsyncAction(
  GET_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE
)<undefined, object[], unknown>();
