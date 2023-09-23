import "./rightbar.css"
import { Users } from '../../Randompeople'
import Online from "../online/Online"

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (<>
      <div className="birthdatContainer">
        <img className="birthdayImg" src="./assets/kanye.jpeg" alt="" />
        <span className="birthdayText"><b>Jess</b> and <b>3 others</b> have a birthday today</span>
      </div>
      <img className="rightbarAd" src="./assets/kanye.jpeg" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>)
  }
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Atlanta</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Georgia</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="./assets/kanye.jpeg" alt="" />
            <span className="rightbarFollowingName">Kanye West</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="./assets/kanye.jpeg" alt="" />
            <span className="rightbarFollowingName">Kanye West</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="./assets/kanye.jpeg" alt="" />
            <span className="rightbarFollowingName">Kanye West</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="./assets/kanye.jpeg" alt="" />
            <span className="rightbarFollowingName">Kanye West</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="./assets/kanye.jpeg" alt="" />
            <span className="rightbarFollowingName">Kanye West</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="./assets/kanye.jpeg" alt="" />
            <span className="rightbarFollowingName">Kanye West</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar />}
      </div>
    </div>
  )
}
