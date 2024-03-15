import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import logo from "../images/logo.png";
import Player from './Player';
import { Link } from 'react-router-dom';

function Home() {
  const loginStatus = sessionStorage.getItem('login');
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://db-xofs.onrender.com/users');
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    axios.post(`https://db-xofs.onrender.com/logout`)
      .then(() => {
        sessionStorage.removeItem('login');
        window.location.reload();
      })
      .catch(err => console.error(err));
  };

  const handleOptionChange = e => {
    setSelectedUser(e.target.value);
  };

  return (
    <>
      <nav>
        <img src={logo} alt="logo" id="logo" />
        <div id="navcont">
        <div>
        <select name="userName" onChange={handleOptionChange} value={selectedUser}> 
            <option value="All">All</option>
            {userData.map(el => (
              <option key={el._id} value={el.username}>{el.username}</option>
            ))}
            
          </select>

        </div>
        </div>
          {loginStatus ? (
            <>
              <a href="#" onClick={handleLogout}>Logout</a>
              <Link to='/form'>Add Player</Link>
            </>
          ) : (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Sign-up</Link>
            </>
          )}
        
      </nav>
      <div className="displayOut">
        <Player selectedUser={selectedUser} />
      </div>
      <footer>
        <h3>&copy; FOOTY-FAILS 2024</h3>
      </footer>
    </>
  );
}

export default Home;
