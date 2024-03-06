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
              const response = await axios.get('https://db-xofs.onrender.com/players')
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
    players.map(player=>{
      return(
        <>
      <div className="container">
        <div className="player">
          <img
            src={player.img}
            alt=""
            id="player-1"
            height="190vw"
            width="308vw"
          />
        </div>
        <div className="contents">
          <p>Name: {player.name}</p>
          <p>Transfer fee: {player.transferFee}</p>
          <p>Transfer year: {player.year}</p>
          <p>Transfered from: {player.from}</p>
          <p>Transfered to: {player.to}</p>
        </div>
      </div>
    </>
      )
    })
    
  );
}

export default Player;
