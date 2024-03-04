import './landing.css'
import bg from '../images/bg.jpeg'
import { Link } from 'react-router-dom'
function landing(){
    return(
        <>
        <div className='landing'>
            <h1 id='title'>FOOTY FAILS</h1>
            <Link to='/home'>
            <button id='enter'>CLICK HERE</button>
            </Link>
             
            
            
        </div>
           
           
        </>
    )
}

export default landing