import '../App.css'
import logo from '../images/logo.png'
import Player from './Player'


function Home(){
    return( 
        <>
        <nav>
            <img src={logo} alt='logo' id='logo' />
            <input type="text" id='search' />
            <a href="">About</a>
        </nav>
        <div>
        <Player/>
        </div>
        
        </>
    )
}

export default Home;
