import './navbar.css'
import { Search, Person, Notifications, Chat } from '@mui/icons-material';
import { useNavigate } from 'react-router'

export default function Navbar() {
  const navigate3 = useNavigate();

  function handleRegClick() {
    navigate3("/username:")
  }
  function handleReg2Click() {
    navigate3("/home")
  }
  function handleReg3Click() {
    navigate3("/register")
  }
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span onClick={handleReg2Click} className="logo">Thehotspot</span>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
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
          <div className="navbarIconItem">
            <button onClick={handleReg3Click} className="signOutBtn">SignOut?</button>
          </div>
        </div>
        <img onClick={handleRegClick} src="./assets/kanye.jpeg" alt="" className="navbarImg" />
      </div>
    </div>
  )
}