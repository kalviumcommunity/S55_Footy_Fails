import '../App.css'
import logo from '../images/logo.png'
import Player from './Player'
import { Link } from 'react-router-dom'


function Home(){
    return( 
        <>
        <nav>
            <img src={logo} alt='logo' id='logo' />
            <input type="text" id='search' />
            <Link to='/form'>
            <a href="">Add Player</a>
            </Link>
            
            <a href="">About</a>
            
        </nav>
        <div className='displayOut'>
        <Player/>
        </div>
        <footer>
            <h3>&copy; FOOTY-FAILS 2024</h3>
        </footer>
        </>
    )
}

export default Home;
