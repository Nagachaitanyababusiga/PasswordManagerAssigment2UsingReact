import './index.css'

const UserItem = props => {
  const {UserDetails, showPassword, deleteUserItem} = props
  const {id, website, username, password} = UserDetails

  const cardDelete = () => {
    deleteUserItem(id)
  }

  return (
    <li className="lst-item-card">
      <div className="lst-para-cont">
        <div>
          <p className="Name-symbol">{website[0].toUpperCase()}</p>
        </div>
        <div>
          <p className="lst-item-website">{website}</p>
          <p>{username}</p>
          {showPassword ? (
            <p>{password}</p>
          ) : (
            <img
              className="password-hider"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={cardDelete}
        data-testid="delete"
        className="btn-cont"
      >
        <img
          className="deleteicon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default UserItem
