import axios from "axios";
import "../App.css";
import logo from "../images/logo.png";
import Player from "./Player";
import { Link } from "react-router-dom";

function Home() {
  const loginStatus = sessionStorage.getItem("login");
  const handleLogout = () => {
    axios.post(`https://db-xofs.onrender.com/logout`)
    .then(()=>{
        sessionStorage.removeItem("login");
        window.location.reload();
        console.log(document.cookie)
    })
    .catch((err)=>[
        console.error(err)
    ])
    
    
  };
  return (
    <>
      <nav>
        <img src={logo} alt="logo" id="logo" />
        <div id="navcont">
        {loginStatus ? (
                        <>
                            <a href="#" onClick={handleLogout}>Logout</a>
                            <Link to='/form'><a href="">Add Player</a></Link>
                        </>
                    ) : (
                        <>
                            <Link to='/login'><a href="">Login</a></Link>
                            <Link to='/signup'><a href="">Sign-up</a></Link>
                        </>
                    )}

          

          <a href="">About</a>
        </div>
      </nav>
      <div className="displayOut">
        <Player />
      </div>
      <footer>
        <h3>&copy; FOOTY-FAILS 2024</h3>
      </footer>
    </>
  );
}

export default Home;
