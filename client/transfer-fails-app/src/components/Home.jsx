import '../App.css'
import logo from '../images/logo.png'
import coutinho from '../images/COUTINHO.jpg'

function Home(){
    return( 
        <>
        <nav>
            <img src={logo} alt='logo' id='logo' />
            <input type="text" id='search' />
            <a href="">About</a>
        </nav>
        <div className='container'>
            <div className='player'>
                <img src={coutinho} alt="" id='player-1' height='170vw' width='308vw' />
            </div>
            <div className='contents'>
                <h3>Name of the Player: Phillipe Coutinho</h3>
                <h3>Transfer fee: £142 million</h3>
                <h3>Year of transfer: 2014</h3>
                <h3>Transferred from: Liverpool FC</h3>
                <h3>Transferred to: FC Barcelona</h3>
            </div>
        </div>
        </>
    )
}

export default Home;
