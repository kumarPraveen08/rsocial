import { useContext } from "react";
import "./comments.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "context/authContext";

export default function Comments() {
  const comments = [
    {
      id: 1,
      userId: 1,
      name: "Mark",
      desc: "Lorem ipsum dolor sit amet.",
      profilePic:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    },
    {
      id: 2,
      userId: 3,
      name: "Kevin Smith",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      profilePic:
        "https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg",
    },
    {
      id: 3,
      userId: 2,
      name: "John Doe",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aliquam repudiandae qui. Tempore, dignissimos ducimus. Dolores harum ipsam deserunt, ut, atque perspiciatis nulla cum aliquid nisi, incidunt ad accusantium a officia modi laborum nihil esse similique? Magni aliquam illo commodi expedita, odio nostrum earum. Eligendi corporis maxime possimus officia eveniet?",
      profilePic:
        "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg",
    },
    {
      id: 4,
      userId: 5,
      name: "Mary Williams",
      desc: "Lorem ipsum dolor sit.",
      profilePic:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg",
    },
  ];

  const { currentUser } = useContext(AuthContext);
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt={currentUser.name} />
        <input type="text" placeholder="write your comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePic} alt={comment.name} />
          <div className="info">
            <Link
              to={`/profile/${comment.userId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>{comment.name}</span>
            </Link>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 minute ago</span>
        </div>
      ))}
    </div>
  );
}
