const initialState = {
  initYear: 2019,
  currYear: 2019,
  photos: [],
}

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_YEAR':
      return { ...state, currYear: action.payload }
    default:
      return state
  }
}
