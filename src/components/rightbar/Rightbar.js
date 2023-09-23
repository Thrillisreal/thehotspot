import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdatContainer">
          <img className="birthdayImg" src="./assets/kanye.jpeg" alt="" />
          <span className="birthdayText"><b>Jess</b> and <b>3 others</b> have a birthday today</span>
        </div>
        <img className="rightbarAd" src="./assets/kanye.jpeg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="./assets/kanye.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
