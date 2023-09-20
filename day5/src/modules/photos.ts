const GET_PHOTOS = 'items/GET_PHOTOS' as const;

export const getPhotos = (photos: string[]) => ({
  type: GET_PHOTOS,
  payload: photos
});

type PhotoAction = ReturnType<typeof getPhotos>;

type PhotoState = { photos: string[] };

const initialState = {
  photos: []
};

function photoReducer(
  state: PhotoState = initialState,
  action: PhotoAction
): PhotoState {
  switch (action.type) {
    case 'items/GET_PHOTOS':
      return {
        photos: action.payload
      };
    default:
      return state;
  }
}

export default photoReducer;
