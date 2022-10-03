import {Component} from 'react'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="add-password-container">
          <div className="add-input">
            <h1 className="heading">Add New Password</h1>
            <div className="input-div">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />
              </div>
              <input className="enter-input" type="text" />
            </div>
            <div className="input-div">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="website"
                  className="icon"
                />
              </div>
              <input className="enter-input" type="text" />
            </div>
            <div className="input-div">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="website"
                  className="icon"
                />
              </div>
              <input className="enter-input" type="text" />
            </div>
            <div className="button-right">
              <button type="button" className="button">
                Add
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="project-image"
          />
        </div>
        <div className="password-container">
          <div className="pass-search-con">
            <div className="heading-number">
              <h1 className="password-heading">Your Password</h1>
              <button type="button" className="number">
                0
              </button>
            </div>
            <div className="search-container">
              <div className="search-icon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  alt="search"
                  className="icon-search"
                />
              </div>
              <input type="search" className="search-input" />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="show-pass">
            <input type="checkbox" id="checkbox" className="checkbox-input" />
            <label htmlFor="checkbox" className="label">
              Show Password
            </label>
          </div>
          <div className="password-display">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
              alt="no passwords"
              className="no-found"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
