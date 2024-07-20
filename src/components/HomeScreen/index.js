import {Component} from 'react'
import {v4 as v4uuid} from 'uuid'
import UserItem from '../UserItem'
import './index.css'

class HomeScreen extends Component {
  state = {
    UserList: [
      {id: v4uuid(), website: 'utube.com', username: 'raghu', password: '1234'},
    ],
  }

  render() {
    const {UserList} = this.state
    const FilteredList = UserList

    return (
      <div className="cont-1">
        <div className="cont-2">
          <img
            className="applogo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
        </div>
        <div className="cont-3">
          <form className="input-cont">
            <h1>Add New Password</h1>
            <div className="input-ele-cont">
              <div className="input-ele-img-cont">
                <img
                  className="input-ele-img"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                />
              </div>
              <input
                type="text"
                className="input-element"
                placeholder="Enter website name"
              />
            </div>
            <div className="input-ele-cont">
              <div className="input-ele-img-cont">
                <img
                  className="input-ele-img"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                />
              </div>
              <input
                type="text"
                className="input-element"
                placeholder="Enter Username"
              />
            </div>
            <div className="input-ele-cont">
              <div className="input-ele-img-cont">
                <img
                  className="input-ele-img"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                />
              </div>
              <input
                type="password"
                className="input-element"
                placeholder="Enter Password"
              />
            </div>
            <div className="input-btn-cont">
              <button className="addbtn" type="submit">
                Add
              </button>
            </div>
          </form>
          <img
            className="passwordmanager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="cont-4">
          <div className="bottom-cont-top-header">
            <div className="bottom-cont-top-header-text">
              <h1>Your Passwords</h1>
              <p className="no-of-passwords">0</p>
            </div>
            <div className="bottom-top-search">
              <img
                className="search"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input className="bottom-top-search-element" type="search" />
            </div>
          </div>
          <hr className="hrline" />
          <div className="checkbox-cont">
            <input type="checkbox" className="checkbox" id="option" />
            <label htmlFor="option">Show Passwords</label>
          </div>
          <ul className="list-cont">
            {FilteredList.map(x => (
              <UserItem key={x.id} UserDetails={x} />
            ))}
          </ul>
          <div className="no-passwords-cont">
            <img
              className="nopasswordsimg"
              alt="no passwords"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            />
            <p>No Passwords</p>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeScreen
