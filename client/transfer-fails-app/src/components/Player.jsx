import "../App.css";
import coutinho from '../images/COUTINHO.jpg'

function Player() {
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
