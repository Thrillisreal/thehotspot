import './register.css'
import { useNavigate } from 'react-router'

export default function Register() {
  const navigate2 = useNavigate();

  function handleRegClick() {
    navigate2("/username:")
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">TheHotSpot</h3>
          <span className="loginDesc">Meet new people anywhere on H</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button onClick={handleRegClick} className="loginButton">Sign Up</button>
            <button onClick={handleRegClick} className="loginRegisterButton">Login into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
