import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UpdatePlayer() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [transferFee, setTransferFee] = useState("");
  const [year, setYear] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://db-xofs.onrender.com/getPlayers/${id}`
        );
        setName(response.data.name);
        setTransferFee(response.data.transferFee);
        setYear(response.data.year);
        setFrom(response.data.from);
        setTo(response.data.to);
        setImg(response.data.img);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    const updatedPlayer = {
      name: name,
      transferFee: transferFee,
      year: year,
      from: from,
      to: to,
      img: img,
    };

    // sending updated player data to the url
    axios.put(`https://db-xofs.onrender.com/updatePlayers/${id}`, updatedPlayer)
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div id="form-cont">
        <form id="form" onSubmit={Update}>
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Transfer fee:</label>
            <br />
            <input
              type="text"
              name="transferFee"
              value={transferFee}
              onChange={(e) => setTransferFee(e.target.value)}
            />
          </div>
          <div>
            <label>Year:</label>
            <br />
            <input
              type="text"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div>
            <label>From:</label>
            <br />
            <input
              type="text"
              name="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div>
            <label>To:</label>
            <br />
            <input
              type="text"
              name="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div>
            <label>Image URL:</label>
            <br />
            <input
              type="text"
              name="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">UPDATE</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdatePlayer;
