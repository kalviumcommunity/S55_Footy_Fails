import axios from "axios";
import "../App.css";
import { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom";

function Signup() { 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const handleSignup = async (e) => { 
    try {
      e.preventDefault(); 
      if (!username || !password) {
        if (!username) {
          alert("Please enter your username");
        }
        if (!password) {
          alert("Please enter your password");
        }
      } else if (password.length < 6) {
        alert("Password should contain at least 6 characters");
      } else {
        await axios.post(`https://db-xofs.onrender.com/signup`, { username, password }); 
        console.log(username);
        console.log(password);
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="signupCont">
        <form action="" className="userForm" onSubmit={handleSignup}> 
          <div>
            <label htmlFor="">Username: </label>
            <input
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>

          <div>
            <label>Password: </label>
            <input
              type="password" 
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" id="btn">
            SIGN UP 
          </button>
          <u>
            <p>Already have an account? 
            <Link to='/login'> 
              <a>Login</a>
            </Link>
          </p>
          </u> 
        </form>
      </div>
    </>
  );
}

export default Signup; 