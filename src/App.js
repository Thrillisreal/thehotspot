import './App.css';
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route Index element={<Login />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/username:" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>

    // <div className="App">
    //   {/* <Home /> */}
    //   {/* <Profile/> */}
    //   {/* <Login/> */}
    //   {/* <Register /> */}
    // </div>
  );
}

export default App;
