import axios from "axios";
import { useEffect, useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";

function AddPlayer() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: "",
    transferFee: "",
    year: 0,
    from: "",
    to: "",
    img: "",
    created_by:`${sessionStorage.getItem('username')}`
  });

  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, transferFee, year, from, to, img } = info;
    
   
    if (!name || !transferFee || !year || !from || !to || !img) {

      if (!name) {
        alert("Name field is required!");
      }
      if (!transferFee) {
        alert("Transfer Fee field is required!");
      }
      if (!year) {
        alert("Year field is required!");
      }
      if (!from) {
        alert("From field is required!");
      }
      if (!to) {
        alert("To field is required!");
      }
      if (!img) {
        alert("Image URL field is required!");
      }
    } else {

      // const createdBy = sessionStorage.getItem('username');
    // setInfo((prevInfo) => ({
    //   ...prevInfo,
    //   "created_by": createdBy,
    // }));
      
      axios
        .post("https://db-xofs.onrender.com/insert", {
          "name" : info.name,
          "transferFee" : info.transferFee,
          "year":info.year,
          "from":info.from,
          "to":info.to,
          "img":info.img,
          "created_by":info.created_by
        })
        .then((response) => {
          console.log(response.data);
          navigate("/home");
          console.log(info)
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    
    if (
      info.name !== "" &&
      info.transferFee !== "" &&
      info.year !== 0 &&
      info.from !== "" &&
      info.to !== "" &&
      info.img !== ""
    ) {
      setIsFilled(true);
    }
  }, [info]);

  return (
    <>
      <div id="form-cont">
        <form onSubmit={handleSubmit} id="form">
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              value={info.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div>
            <label>Transfer Fee: </label>
            <br />
            <input
              type="text"
              value={info.transferFee}
              onChange={handleChange}
              name="transferFee"
            />
          </div>
          <div>
            <label>Year:</label>
            <br />
            <input
              type="text"
              value={info.year}
              onChange={handleChange}
              name="year"
            />
          </div>
          <div>
            <label>From:</label>
            <br />
            <input
              type="text"
              value={info.from}
              onChange={handleChange}
              name="from"
            />
          </div>
          <div>
            <label>To:</label>
            <br />
            <input
              type="text"
              value={info.to}
              onChange={handleChange}
              name="to"
            />
          </div>
          <div>
            <label>Image URL:</label>
            <br />
            <input
              type="text"
              value={info.img}
              onChange={handleChange}
              name="img"
            />
          </div>
          <div>
            <button id="submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddPlayer;
