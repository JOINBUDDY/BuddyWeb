import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function SignUp() {
  return (
    <div className="authPage">
      <div className="authCard">
        <h1 className="authTitle">Sign up</h1>

        <input className="authInput" type="text" placeholder="Name" />
        <input className="authInput" type="email" placeholder="Email" />
        <input className="authInput" type="password" placeholder="Password" />

        <button className="authButton">Create account</button>

        <p className="authText">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
