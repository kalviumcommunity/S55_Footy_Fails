import { useEffect,useState } from "react";
import "../App.css";
import axios from 'axios'
import { Link ,useNavigate} from "react-router-dom";




function Player() {
  const navigate = useNavigate()
  console.log('hello')
    const [players,setPlayers]= useState([])
    useEffect(()=>{
      const addData = async()=>{
          try{
              const response = await axios.get('https://db-xofs.onrender.com/Players')
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

    const handleDelete = (id)=>{
        axios.delete('https://db-xofs.onrender.com/deletePlayers/'+id)
        .then(res=>{
          console.log(res)
          window.location.reload()
        })
        .catch(err=>console.log(err))
    }

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
        <div className="buttons">

          
          <button id="update" className="but" onClick={()=>navigate(`/update/${player._id}`)}>UPDATE</button>
        
          
          <button id="delete" className="but" onClick={(e)=>{handleDelete(player._id)}}>DELETE</button>
        </div>
      </div>
    </>
      )
    })
    
  );
}

export default Player;
