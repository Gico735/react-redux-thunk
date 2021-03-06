import React from 'react'
import { connect } from 'react-redux'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageActions'

class PageContainer extends React.Component {
  render() {
    const { page, getPhotos } = this.props
    return (
      <Page
        photos={page.photos}
        currYear={page.currYear}
        initYear={page.initYear}
        error={page.error}
        isFetching={page.isFetching}
        getPhotos={getPhotos}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: year => dispatch(getPhotos(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
