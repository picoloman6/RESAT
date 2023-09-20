const SET_ITEMS = 'items/SET_ITEMS' as const;

export const setItems = (newItems: object[]) => ({
  type: SET_ITEMS,
  payload: newItems
});

type ItemAction = ReturnType<typeof setItems>;

type ItemState = { items: object[] };

const initialState = {
  items: []
};

function itemReducer(
  state: ItemState = initialState,
  action: ItemAction
): ItemState {
  switch (action.type) {
    case 'items/SET_ITEMS':
      return { items: [...state.items, ...action.payload] };
    default:
      return state;
  }
}

export default itemReducer;
