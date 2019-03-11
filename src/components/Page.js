import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  setYear = ({ target: { textContent } }) => this.props.getPhotos(+textContent)

  render() {
    const { currYear, initYear, photos, isFetching } = this.props
    return (
      <div className="page">
        <div>
          {new Array(5).fill('').map((_, index) => (
            <button
              key={index}
              onClick={this.setYear}
              className={`page__btn page__btn--${index}`}>
              {initYear - index}
            </button>
          ))}
        </div>
        <h3>{currYear} год</h3>
        {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
      </div>
    )
  }
}

Page.propTypes = {
  initYear: PropTypes.number.isRequired,
  currYear: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}
