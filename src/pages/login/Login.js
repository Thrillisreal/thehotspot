import './login.css'
import { useNavigate } from 'react-router'

export default function Login() {

  const navigate = useNavigate()

  function handleClick() {
    navigate("/home")
  }
  function handleTwoClick() {
    navigate("/register")
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">TheHotSpot</h3>
          <span className="loginDesc">Meet new people anywhere!!</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button onClick={handleClick} className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button onClick={handleTwoClick} className="loginRegisterButton">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
