import { useEffect,useState } from "react";
import "../App.css";
import coutinho from '../images/COUTINHO.jpg'
import axios from 'axios'



function Player() {
  console.log('hello')
    const [players,setPlayers]= useState([])
    useEffect(()=>{
        const addData = async()=>{
            try{
                const response = await axios.get('http://localhost:3200/players')
                setPlayers(response.data)
            }catch(err){
                console.log(err)
            }
        }
        addData()
    },[])

    useEffect(()=>{
        console.log('players',players)
    },[players])

  return (
    <>
      <div className="container">
        <div className="player">
          <img
            src={coutinho}
            alt=""
            id="player-1"
            height="170vw"
            width="308vw"
          />
        </div>
        <div className="contents">
          <h3>Name of the Player: Phillipe Coutinho</h3>
          <h3>Transfer fee: £142 million</h3>
          <h3>Year of transfer: 2014</h3>
          <h3>Transferred from: Liverpool FC</h3>
          <h3>Transferred to: FC Barcelona</h3>
        </div>
      </div>
    </>
  );
}

export default Player;
