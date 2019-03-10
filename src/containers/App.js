import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User/User'
import { Page } from '../components/Page/Page'
import { setYear } from '../actions/PageActions'

import './App.css'

class App extends Component {
  render() {
    const { user, page, setYearAction } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <User name={user.name} />
        <Page
          photos={page.photos}
          currYear={page.currYear}
          initYear={page.initYear}
          setYear={setYearAction}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => ({
  setYearAction: year => dispatch(setYear(year)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)