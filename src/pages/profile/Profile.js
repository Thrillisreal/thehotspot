import './profile.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Footer from '../../components/footer/Footer'

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="./assets/kanyebac.jpeg" alt="" />
              <img className="profileUserImg" src="./assets/kanye.jpeg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Kanye</h4>
              <span className="profileInfoDesc">hello</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
