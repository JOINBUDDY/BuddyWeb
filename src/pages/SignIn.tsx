import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function SignIn() {
  return (
    <div className="authPage">
      <div className="authCard">
        <h1 className="authTitle">Sign in</h1>

        <input className="authInput" type="email" placeholder="Email" />
        <input className="authInput" type="password" placeholder="Password" />

        <button className="authButton">Continue</button>

        <p className="authText">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
