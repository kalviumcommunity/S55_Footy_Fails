import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Player({ selectedUser }) {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://db-xofs.onrender.com/Players');
        setPlayers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://db-xofs.onrender.com/deletePlayers/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  const filteredPlayers = selectedUser === 'All' ? players : players.filter(player => player.created_by === selectedUser);

  return (
    filteredPlayers.map(player => (
      <div className="container" key={player._id}>
        <div className="player">
          <img
            src={player.img}
            alt=""
            id="player-1"
            height="190vw"
            width="100%"
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
          <button id="update" className="but" onClick={() => navigate(`/update/${player._id}`)}>UPDATE</button>
          <button id="delete" className="but" onClick={() => handleDelete(player._id)}>DELETE</button>
        </div>
      </div>
    ))
  );
}

export default Player;
