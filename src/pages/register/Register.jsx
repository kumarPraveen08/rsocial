import "./register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>React Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quisquam ab beatae eveniet? Labore eius minima magni ut cupiditate
            adipisci!
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={() => console.log(`register form submit`)}>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
