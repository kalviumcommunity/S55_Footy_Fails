import axios from "axios";
import { useState } from "react";
import './form.css'

function AddPlayer(){
    const [info, setInfo] = useState({
        name: "",
        transferFee: "",
        year: 0,
        from: "",
        to: "",
        img: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(info); 
        axios.post('https://db-xofs.onrender.com/insert',info)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((err)=>{
            console.error(err)
        })

    };

    return(
        <>
            <div id="form-cont">
                <form onSubmit={handleSubmit} id="form">
                    <div>
                        <label>Name: </label>
                        <br />
                        <input type="text" value={info.name} onChange={handleChange} name="name" />
                    </div> 
                    <div>
                        <label>Transfer Fee: </label>
                        <br />
                        <input type="text" value={info.fee} onChange={handleChange} name="transferFee" />
                    </div> 
                    <div>
                        <label>Year:</label>
                        <br />
                        <input type="text" value={info.year} onChange={handleChange} name="year" />
                    </div> 
                    <div>
                        <label>From:</label>
                        <br />
                        <input type="text" value={info.from} onChange={handleChange} name="from" />
                    </div> 
                    <div>
                        <label>To:</label>
                        <br />
                        <input type="text" value={info.to} onChange={handleChange} name="to" />
                    </div> 
                    <div>
                        <label>Image URL:</label>
                        <br />
                        <input type="text" value={info.url} onChange={handleChange} name="img" />
                    </div> 
                    <div>
                        <button id="submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    ) 
}

export default AddPlayer;
