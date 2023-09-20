const GET_ITEMS = 'items/GET_ITEMS' as const;
const GET_PHOTOS = 'items/GET_PHOTOS' as const;

export const getItems = (newItems: object[]) => ({
  type: GET_ITEMS,
  payload: newItems
});

export const getPhotos = (photos: string[]) => ({
  type: GET_PHOTOS,
  payload: photos
});

type ItemAction = ReturnType<typeof getItems> | ReturnType<typeof getPhotos>;

type ItemState = { items: object[]; photos: string[] };

const initialState = {
  items: [],
  photos: []
};

function itemReducer(
  state: ItemState = initialState,
  action: ItemAction
): ItemState {
  switch (action.type) {
    case 'items/GET_ITEMS':
      return {
        items: [...state.items, ...action.payload],
        photos: state.photos
      };
    case 'items/GET_PHOTOS':
      return {
        items: state.items,
        photos: action.payload
      };
    default:
      return state;
  }
}

export default itemReducer;
