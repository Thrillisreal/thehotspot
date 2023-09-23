import './navbar.css'
import { Search, Person, Notifications, Chat } from '@mui/icons-material';

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">hotspot</span>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search for anything" className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <span className="navbarLink"></span>
        <span className="navbarLink"></span>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Chat />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <Notifications />
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <img src="./assets/kanye.jpeg" alt="" className="navbarImg" />
      </div>
    </div>
  )
}