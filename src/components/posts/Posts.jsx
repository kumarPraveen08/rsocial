import Post from "components/post/Post";
import "./posts.scss";

export default function Posts() {
  const posts = [
    {
      id: 1,
      userId: "1",
      name: "Mark",
      profilePic:
        "https://images.pexels.com/photos/17542830/pexels-photo-17542830/free-photo-of-fashion-woman-girl-cute.jpeg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ab laborum accusamus. Id, quis non.",
      img: "https://images.pexels.com/photos/13064554/pexels-photo-13064554.jpeg",
      likes: 5,
      comments: 4,
    },
    {
      id: 2,
      userId: "2",
      name: "Kevin Smith",
      profilePic:
        "https://images.pexels.com/photos/15346748/pexels-photo-15346748/free-photo-of-pink-konditorei-aida-in-vienna.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil facilis amet neque distinctio, placeat excepturi? Minus qui harum architecto tempora.",
      likes: 2,
      comments: 0,
    },
    {
      id: 3,
      userId: "2",
      name: "Kevin Smith",
      profilePic:
        "https://images.pexels.com/photos/15346748/pexels-photo-15346748/free-photo-of-pink-konditorei-aida-in-vienna.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil facilis amet neque distinctio, placeat excepturi? Minus qui harum architecto tempora.",
      img: "https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg",
      likes: 15,
      comments: 3,
    },
    {
      id: 4,
      userId: "1",
      name: "Mark",
      profilePic:
        "https://images.pexels.com/photos/17542830/pexels-photo-17542830/free-photo-of-fashion-woman-girl-cute.jpeg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ab laborum accusamus. Id, quis non.",
      img: "https://images.pexels.com/photos/3565370/pexels-photo-3565370.jpeg",
      likes: 3,
      comments: 8,
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
