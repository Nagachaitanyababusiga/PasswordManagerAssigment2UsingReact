import './index.css'

const UserItem = props => {
  const {UserDetails} = props
  const {username, password} = UserDetails
  return (
    <li>
      <p>{username}</p>
      <p>{password}</p>
    </li>
  )
}

export default UserItem
