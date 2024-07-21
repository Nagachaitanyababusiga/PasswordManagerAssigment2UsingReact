import {Component} from 'react'
import {v4 as v4uuid} from 'uuid'
import UserItem from '../UserItem'
import './index.css'

class HomeScreen extends Component {
  state = {
    UserList: [],
    website: '',
    username: '',
    password: '',
    showPassword: false,
    search: '',
  }

  changeWebsite = event => {
    this.setState({website: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  submit = event => {
    event.preventDefault()
    const {UserList, website, username, password} = this.state
    if (website === '' || username === '' || password === '') return
    const NewList = [...UserList, {id: v4uuid(), website, username, password}]
    this.setState({UserList: NewList, website: '', username: '', password: ''})
  }

  changeSearch = event => {
    this.setState({search: event.target.value})
  }

  changeCheckBox = event => {
    this.setState({showPassword: event.target.checked})
  }

  deleteUserItem = id => {
    this.setState(prevState => {
      const newList = prevState.UserList.filter(x => x.id !== id)
      return {UserList: newList}
    })
  }

  render() {
    const {
      UserList,
      website,
      username,
      password,
      showPassword,
      search,
    } = this.state
    const FilteredList = UserList.filter(x =>
      x.website.toLowerCase().includes(search.toLowerCase()),
    )

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
          <form className="input-cont" onSubmit={this.submit}>
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
                onChange={this.changeWebsite}
                value={website}
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
                onChange={this.changeUsername}
                value={username}
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
                onChange={this.changePassword}
                value={password}
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
              <p className="no-of-passwords">{FilteredList.length}</p>
            </div>
            <div className="bottom-top-search">
              <img
                className="search"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                onChange={this.changeSearch}
                className="bottom-top-search-element"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="hrline" />
          <div className="checkbox-cont">
            <input
              onChange={this.changeCheckBox}
              type="checkbox"
              className="checkbox"
              id="option"
            />
            <label htmlFor="option">Show Passwords</label>
          </div>
          {FilteredList.length > 0 ? (
            <ul className="list-cont">
              {FilteredList.map(x => (
                <UserItem
                  key={x.id}
                  UserDetails={x}
                  deleteUserItem={this.deleteUserItem}
                  showPassword={showPassword}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-cont">
              <img
                className="nopasswordsimg"
                alt="no passwords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default HomeScreen
