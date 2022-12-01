import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="loginForm">
        <span className="loginTitle">Login</span>
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="avinash45@gmail.com"
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="avinash123"
        />
        <button className="loginButton">
          Login
        </button>
      </div>
      <button className="registerButton">
        <Link className='link' to="/register">Register</Link>
      </button>
    </div>
  );
};

export default Login;
