import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context/authContext";
import Posts from "components/posts/Posts";
import Footer from "components/footer/Footer";

export default function Profile() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="profile">
      <div className="images">
        <img
          className="cover"
          src="https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg"
          alt=""
        />
        <img
          className="picture"
          src={currentUser.profilePic}
          alt={currentUser.name}
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <Link to="/" target="_blank">
              <FacebookTwoToneIcon fontSize="medium" />
            </Link>
            <Link to="/" target="_blank">
              <TwitterIcon fontSize="medium" />
            </Link>
            <Link to="/" target="_blank">
              <InstagramIcon fontSize="medium" />
            </Link>
            <Link to="/" target="_blank">
              <LinkedInIcon fontSize="medium" />
            </Link>
            <Link to="/" target="_blank">
              <PinterestIcon fontSize="medium" />
            </Link>
          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                India
              </div>
              <div className="item">
                <LanguageIcon />
                EN, HI
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
      <Footer />
    </div>
  );
}
