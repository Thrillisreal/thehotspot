import './closefriend.css'

export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src="./assets/kanye.jpeg" alt="" />
      <span className="sidebarFriendName">{user.username} </span>
    </li>
  )
}
