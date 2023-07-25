import "./stories.scss";
import { useContext } from "react";
import { AuthContext } from "context/authContext";

export default function Stories() {
  const { currentUser } = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/4370414/pexels-photo-4370414.jpeg",
    },
    {
      id: 2,
      name: "Mark",
      img: "https://images.pexels.com/photos/15346748/pexels-photo-15346748/free-photo-of-pink-konditorei-aida-in-vienna.jpeg",
    },
    {
      id: 3,
      name: "Kevin Smith",
      img: "https://images.pexels.com/photos/13064554/pexels-photo-13064554.jpeg",
    },
    {
      id: 4,
      name: "Mary",
      img: "https://images.pexels.com/photos/17542830/pexels-photo-17542830/free-photo-of-fashion-woman-girl-cute.jpeg",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt={currentUser.name} />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt={story.name} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}
