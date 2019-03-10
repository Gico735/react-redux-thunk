import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  setYear = ({ target: { textContent } }) => this.props.setYear(+textContent)

  render() {
    const { currYear, initYear, photos } = this.props
    return (
      <div>
        <div>
          {new Array(5).fill('').map((_, index) => (
            <button key={index} onClick={this.setYear} className="page__btn">
              {initYear - index}
            </button>
          ))}
        </div>
        <p>
          У тебя {photos.length} фото за {currYear} год
        </p>
      </div>
    )
  }
}

Page.propTypes = {
  currYear: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
}
