import "./home.scss";
import Stories from "components/stories/Stories";
import Posts from "components/posts/Posts";
import Footer from "components/footer/Footer";
import Share from "components/share/Share";

export default function Home() {
  return (
    <div className="home">
      <Stories />
      <Share />
      <Posts />
      <Footer />
    </div>
  );
}
