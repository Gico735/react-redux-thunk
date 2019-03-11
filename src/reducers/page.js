import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../actions/PageActions'

const initialState = {
  initYear: 2019,
  currYear: 2019,
  photos: [],
  isFetching: false,
}

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, currYear: action.payload, isFetching: true }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false }

    default:
      return state
  }
}
