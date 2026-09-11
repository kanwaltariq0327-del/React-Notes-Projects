import { useState } from "react";

function LikeButton() {
  let [Liked, setLiked] = useState(false);

  let toggleLike = () => {
    setLiked(!Liked);
    console.log(Liked);
  };

  let LikedStyle = {color : "red"}

  return (
    <div>
      <h2 onClick={toggleLike}>
        {Liked ? (
          <i className="fa-solid fa-heart" style={LikedStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </h2>
    </div>
  );
}

export default LikeButton;
