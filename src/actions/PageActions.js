export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const getPhotos = currYear => {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: currYear,
    })

    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: [1, 2, 3, 4, 5],
      })
    }, 1000)
  }
}
