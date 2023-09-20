const GET_ITEMS = 'items/GET_ITEMS' as const;

export const getItems = (newItems: object[]) => ({
  type: GET_ITEMS,
  payload: newItems
});

type ItemAction = ReturnType<typeof getItems>;

type ItemState = { items: object[] };

const initialState = {
  items: []
};

function itemReducer(
  state: ItemState = initialState,
  action: ItemAction
): ItemState {
  switch (action.type) {
    case 'items/GET_ITEMS':
      return {
        items: [...state.items, ...action.payload]
      };
    default:
      return state;
  }
}

export default itemReducer;
