import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../Randompeople"
import { useState } from 'react'


export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLike] = useState(false)


  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLike(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <img className="postProfileImg" src="./assets/kanye.jpeg" alt="" /> */}
            <img className="postProfileImg" src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
            <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
          {/* <img className="postImg" src="./assets/kanye.jpeg" alt="" /> */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="./assets/heart.webp" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="./assets/likebtn.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div >
  )
}

