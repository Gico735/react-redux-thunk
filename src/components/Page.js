import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  setYear = ({ target: { textContent } }) => this.props.getPhotos(+textContent)

  renderTemplate = () => {
    const { photos, isFetching, error } = this.props
    if (error) {
      return <p className="error">Во время загрузки фото произошла ошибка</p>
    }
    if (isFetching) {
      return <p>Загрузка...</p>
    } else {
      return photos.map(entry => (
        <div key={entry.id} className="photo">
          <p>
            <img src={entry.sizes[0].url} alt="" />
          </p>
          <p>{entry.likes.count} ❤</p>
        </div>
      ))
    }
  }

  render() {
    const { currYear, initYear, photos } = this.props
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
        <h3>
          {currYear} год [{photos.length}]
        </h3>
        {this.renderTemplate()}
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
  error: PropTypes.string,
}
