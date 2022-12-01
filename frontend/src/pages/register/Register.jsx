import './register.css';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState(false);
  const handleSubmit = async  (e) => {
    e.preventDefault();
    try {
      
      const res = await axios.post('http://localhost:8000/api/auth/register',{username,password,email})
      res.data && window.location.replace('/login')
    } catch (error) {
      setErr(true)
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="avinash"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="asasas"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder=""
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          register
        </button>

        {
          err && <span style={{color:"red",margin:"20px"}}>Somthing went wrong!</span>
        
        }
      </form>

      <button className="registerButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
