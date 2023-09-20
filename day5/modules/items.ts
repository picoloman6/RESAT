const GET_ITEMS = 'items/GET_ITEMS' as const;

export const getItems = (items: object[]) => ({
  type: GET_ITEMS,
  payload: items
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
      return { items: action.payload };
    default:
      return state;
  }
}

export default itemReducer;
